import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map, catchError, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Endpoints } from "../endpoints.enum";
import { MessageEncapsuling } from '../models/message-encapsuling.model';
import { LoadingService } from './loading.service';
import { City } from '../models/city.model';

@Injectable({ providedIn: 'root' })
export class CsvService {
    constructor(
        protected router: Router,
        protected http: HttpClient,
        private snackBar: MatSnackBar,
        private loadingService: LoadingService) {

    }
    /**
     * Send an String-encoded file to the UPLOAD endpoint and expects no payload of return,
     * just the system message
     * @param csvBase64 the String enconded file
     */
    public upload(csvBase64: String): Observable<MessageEncapsuling<any>> {
        this.loadingService.setLoading();
        return this.http.post(Endpoints.UPLOAD.toString(), csvBase64)
            .pipe(map(res => new MessageEncapsuling<any>(res)),
                catchError((error: any) => {
                    this.snackBar.open((<MessageEncapsuling<any>>error.error).message.toString());
                    return Observable.throw(error);
                }), finalize(() => this.loadingService.unLoad()));
    }

    public getOrderedByNameCity(){
        this.loadingService.setLoading();
        return this.http.get(Endpoints.ORDER_BY_NAME)
        .pipe(map(res => new MessageEncapsuling<City[]>(res)),
        catchError((error: any) => {
            this.snackBar.open((<MessageEncapsuling<City[]>>error.error).message.toString());
            return Observable.throw(error);
        }), finalize(() => this.loadingService.unLoad()));
    }
}