import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Endpoints } from "../endpoints.enum";

@Injectable({providedIn: 'root'})
export class OpenService{
    constructor(
        protected router: Router,
        protected http: HttpClient) {

    }
    public foo() : void{
        this.http.get(Endpoints.FOOBAR.toString())
        .subscribe(r => console.log(r));
    }
}