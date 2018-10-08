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
export class CityService {

    constructor(
        protected router: Router,
        protected http: HttpClient,
        private snackBar: MatSnackBar,
        private loadingService: LoadingService) {

    }
    /**
     * Go to any endpoint that returns a list os cities
     * @param endpoint the endpoint to make request
     * @param params any aditionalparams
     * @return the MessageEncapsuling containing the list of cities
     */
    public getAnyList(endpoint: Endpoints, params?: any): Observable<MessageEncapsuling<City[]>> {
        this.loadingService.setLoading();
        return this.http.get(endpoint, params || {})
            .pipe(map(res => new MessageEncapsuling<City[]>(res)),
                catchError((error: any) => {
                    this.snackBar.open((<MessageEncapsuling<City[]>>error.error).message.toString());
                    return Observable.throw(error);
                }), finalize(() => this.loadingService.unLoad()));
    }

    /**
     * Get the number of cities
     * @return the MessageEncapsuling containing the number of cities
     */
    public getCount(): Observable<MessageEncapsuling<Number>> {
        this.loadingService.setLoading();
        return this.http.get(Endpoints.CITIES_NUMBER)
            .pipe(map(res => new MessageEncapsuling<Number>(res)),
                catchError((error: any) => {
                    this.snackBar.open((<MessageEncapsuling<Number>>error.error).message.toString());
                    return Observable.throw(error);
                }), finalize(() => this.loadingService.unLoad()));
    }
}