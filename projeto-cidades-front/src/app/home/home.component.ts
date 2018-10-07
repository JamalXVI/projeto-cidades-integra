import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CsvService } from '../core/service/csv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form: FormGroup;
  fileName: string = '';

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,
    private csvService: CsvService,
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
}
