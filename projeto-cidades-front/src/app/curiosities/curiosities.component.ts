import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';

import { StateService } from '../core/service/state.service';
import { CityService } from '../core/service/city.service';
import { Endpoints } from '../core/endpoints.enum';
import { MessageEncapsuling } from '../core/models/message-encapsuling.model';
import { CuriositiesDto } from '../core/models/curiosities-dto.model';

@Component({
  selector: 'app-curiosities',
  templateUrl: './curiosities.component.html',
  styleUrls: ['./curiosities.component.css']
})
export class CuriositiesComponent implements OnInit {
  errorPage: boolean = false;
  errorMessages: string = "";
  curiosities:  CuriositiesDto = new CuriositiesDto();
  constructor(
    private stateService: StateService,
    private cityService: CityService) {
      forkJoin(this.stateService.getHightestAndLowest(),
      cityService.getCount(),
      cityService.getAnyList(Endpoints.MOST_DISTANCE))
      .subscribe((result:MessageEncapsuling<any>[]) => {
        for(let message of result){
          if(!!message.message || !message.payload){
            this.errorPage = true;
            this.errorMessages += message.message+" / ";
          }
        }
        if(!this.errorPage){
          this.curiosities.stateCounterDto = result[0].payload
          this.curiosities.numberOfCities = result[1].payload;
          this.curiosities.mostDistancedCities = result[2].payload;
        }
      })
  }

  ngOnInit() {
  }

}
