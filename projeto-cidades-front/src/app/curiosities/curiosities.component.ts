import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';

import { StateService } from '../core/service/state.service';
import { CityService } from '../core/service/city.service';

@Component({
  selector: 'app-curiosities',
  templateUrl: './curiosities.component.html',
  styleUrls: ['./curiosities.component.css']
})
export class CuriositiesComponent implements OnInit {

  constructor(
    private stateService: StateService,
    private cityService: CityService) {
      forkJoin(this.stateService.getHightestAndLowest(),
      cityService.getCount())
      .subscribe(result => {
        console.log(result);
      })
  }

  ngOnInit() {
  }

}
