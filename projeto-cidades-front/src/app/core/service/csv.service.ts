import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Endpoints } from "../endpoints.enum";
import { MessageEncapsuling } from '../models/message-encapsuling.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class CsvService {
    constructor(
        protected router: Router,
        protected http: HttpClient,
        private snackBar: MatSnackBar) {

    }
    public upload(csvBase64: String): Observable<MessageEncapsuling<any>> {
        return this.http.post(Endpoints.UPLOAD.toString(), csvBase64)
            .pipe(map(res => new MessageEncapsuling<any>(res)),
                catchError((error: any) => {
                    this.snackBar.open((<MessageEncapsuling<any>>error.error).message.toString());
                    return Observable.throw(error);
                }));
    }
}