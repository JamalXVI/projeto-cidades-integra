import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OpenService } from '../core/service/open.service';
import { CsvService } from '../core/service/csv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private openService: OpenService,
    private csvService: CsvService,
    private snackBar: MatSnackBar) {
    this.openService.foo();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      file: ['', Validators.required]
    });
  }
  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64File = (<any>reader.result).split(',')[1];
        if (!!base64File) {
          this.csvService.upload(base64File)//("SDA3123D")
            .subscribe(res => {
              console.log(res);
              if (!!res.message) {
                this.snackBar.open(<string>res.message, '', { duration: 2500 });
              }
            });
        }
      };
    }
  }
  openInput() {
    this.fileInput.nativeElement.click();
  }
  clearFile() {
    this.form.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
