import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { OpenService } from '../core/service/open.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private openService: OpenService) {
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
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log((<any>reader.result).split(',')[1]);
        this.form.get('file').setValue({
          filename: file.name,
          filetype: file.type,
          value: (<any>reader.result).split(',')[1]
        })
      };
    }
  }
  openInput(){
    this.fileInput.nativeElement.click();
  }
  clearFile() {
    this.form.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
