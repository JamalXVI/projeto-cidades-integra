import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect } from '@angular/material/select';

import { CsvService } from '../core/service/csv.service';
import { CityService } from '../core/service/city.service';
import { StateService } from '../core/service/state.service';
import { Option } from '../core/models/option.model';
import { City } from '../core/models/city.model';
import { State } from '../core/models/state.model';
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
  searchById: boolean = false;
  states: State[] = [];
  searchByState: boolean = false;
  options: Option[] = [new Option({ name: 'Ordernar por Nome', value: 'orderByName' }),
  new Option({ name: 'Ordernar por Nome Somente Capitais', value: 'orderByNameOnlyCaptals' }),
  new Option({ name: 'Selecionar Cidade Específica', value: 'getId' }),
  new Option({ name: 'Selecionar por um Estado', value: 'getByState' })];

  @ViewChild('fileInput') fileInput: ElementRef;

  @ViewChild('filter') filter: MatSelect;

  @ViewChild('filterState') filterState: MatSelect;

  @ViewChild('cityId') cityIdField: ElementRef;

  constructor(private fb: FormBuilder,
    private csvService: CsvService,
    private cityService: CityService,
    private stateService: StateService,
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
  onChangeFilter() {
    const value = this.filter.value;
    if (!!value) {
      if (value === 'getId') {
        this.searchById = true;
      } else {
        this.searchById = false;
      }
      if (value === 'getByState') {
        this.stateService.getAll().subscribe(message => {
          if (!!message.message) {
            this.snackBar.open(<string>message.message, '', { duration: 2500 });
          } else if (!!message.payload) {
            this.searchByState = true;
            this.states = message.payload;
          }
        })
      }
    }
  }
  onSearch() {
    const value = this.filter.value;
    let endpoint: Endpoints = null;
    let params: any = {};
    if (!!value) {
      if (value !== 'getId') {
        switch (value) {
          case 'orderByName':
            endpoint = Endpoints.ORDER_BY_NAME;
            break;
          case 'orderByNameOnlyCaptals':
            endpoint = Endpoints.ORDER_BY_NAME_ONLY_CAPITALS;
            break;
          case 'getByState':
            const selectState = this.filterState.value;
            if (!!selectState) {
              endpoint = Endpoints.FILTER_BY_STATE;
              params = {params: {"stateId": selectState}};
            }
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
        const selectedId = +this.cityIdField.nativeElement.value;
        this.cityService.getCity(selectedId)
          .subscribe((message: MessageEncapsuling<City>) => {
            if (!!message.message) {
              this.snackBar.open(<string>message.message, '', { duration: 2500 });
            } else if (!!message.payload) {
              this.cities = [message.payload];
            }
          });
      }
    } else {
      this.snackBar.open("ERRO: SELECIONE UMA OPÇÃO VÁLIDA", '', { duration: 2500 });
    }
  }

}
