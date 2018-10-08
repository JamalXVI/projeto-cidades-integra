import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { map, catchError, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Endpoints } from "../endpoints.enum";
import { MessageEncapsuling } from '../models/message-encapsuling.model';
import { LoadingService } from './loading.service';
import { StateCounterDto } from '../models/state-counter-dto.model';
import { State } from '../models/state.model';

@Injectable({ providedIn: 'root' })
export class StateService{

    constructor(
        protected router: Router,
        protected http: HttpClient,
        private snackBar: MatSnackBar,
        private loadingService: LoadingService) {

    }
    /**
     * Return the highest and the lowest state ranked by number of cities
     * @returns the MessageEncapsuling containing the highest and lowest
     */
    public getHightestAndLowest(): Observable<MessageEncapsuling<StateCounterDto[]>>{
        this.loadingService.setLoading();
        return this.http.get(Endpoints.HIGHEST_AND_LOWEST_STATE)
        .pipe(map(res => new MessageEncapsuling<StateCounterDto[]>(res)),
        catchError((error: any) => {
            this.snackBar.open((<MessageEncapsuling<StateCounterDto[]>>error.error).message.toString());
            return Observable.throw(error);
        }), finalize(() => this.loadingService.unLoad()));
    }
    /**
     * Return all the states
     * @returns the MessageEncapsuling containing the highest and lowest
     */
    public getAll(): Observable<MessageEncapsuling<State[]>>{
        this.loadingService.setLoading();
        return this.http.get(Endpoints.ALL_STATES)
        .pipe(map(res => new MessageEncapsuling<State[]>(res)),
        catchError((error: any) => {
            this.snackBar.open((<MessageEncapsuling<State[]>>error.error).message.toString());
            return Observable.throw(error);
        }), finalize(() => this.loadingService.unLoad()));
    }
}