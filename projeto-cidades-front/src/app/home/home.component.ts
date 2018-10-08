import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect } from '@angular/material/select';

import { CsvService } from '../core/service/csv.service';
import { CityService } from '../core/service/city.service';
import { Option } from '../core/models/option.model';
import { City } from '../core/models/city.model';
import { MessageEncapsuling } from '../core/models/message-encapsuling.model';
import { Endpoints } from '../core/endpoints.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form: FormGroup;
  fileName: string = '';
  cities: City[] = [];
  options: Option[] = [new Option({ name: 'Ordernar por Nome', value: 'orderByName' }),
  new Option({ name: 'Ordernar por Nome Somente Capitais', value: 'orderByNameOnlyCaptals' })];

  @ViewChild('fileInput') fileInput: ElementRef;

  @ViewChild('filter') filter: MatSelect;

  constructor(private fb: FormBuilder,
    private csvService: CsvService,
    private cityService: CityService,
    private snackBar: MatSnackBar) {
    this.createForm();
  }

  /**
   * Creates the FileInput form
   */
  createForm() {
    this.form = this.fb.group({
      file: ['', Validators.required]
    });
  }

  /**
   * Dectect fileInput Changes, and achieves the CSV service when dectect some file.
   * @param event The Event who has fired the action
   */
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const selectedFile = (<any>reader.result).split(',');
        this.fileName = file.name;
        const base64File = selectedFile[1];
        if (!!base64File) {
          this.csvService.upload(base64File)
            .subscribe(res => {
              if (!!res.message) {
                this.snackBar.open(<string>res.message, '', { duration: 2500 });
              }
            });
        }
      };
    }
  }

  /**
   * Actives FileInput action when click in the button.
   */
  openInput() {
    this.fileInput.nativeElement.click();
  }

  /**
   * Remove Last Selected File
   */
  clearFile() {
    this.form.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.fileName = '';
  }
  /**
   * Makes the filter change, checking if need to add more fields
   * @param event The Event who has fired the action
   */
  onChangeFilter(event) {

  }
  onSearch() {
    const value = this.filter.value;
    let endpoint: Endpoints = null;
    let params: any = {};
    if (!!value) {
      switch (value) {
        case "orderByName":
          endpoint = Endpoints.ORDER_BY_NAME;
          break;
        case "orderByNameOnlyCaptals":
          endpoint = Endpoints.ORDER_BY_NAME_ONLY_CAPITALS;
          break;
      }
      if (!!endpoint) {
        this.cityService.getAnyList(endpoint, params)
          .subscribe((message: MessageEncapsuling<City[]>) => {
            if (!!message.message) {
              this.snackBar.open(<string>message.message, '', { duration: 2500 });
            } else if (!!message.payload) {
              this.cities = message.payload;
            }
          });
      } else {
        this.snackBar.open("ERRO: SELECIONE UMA OPÇÃO VÁLIDA");
      }
    } else {
      this.snackBar.open("ERRO: SELECIONE UMA OPÇÃO VÁLIDA", '', { duration: 2500 });
    }
  }

}
