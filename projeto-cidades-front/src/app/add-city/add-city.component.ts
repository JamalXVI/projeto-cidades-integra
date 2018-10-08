import { Component, OnInit } from '@angular/core';
import { City } from '../core/models/city.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CityService } from '../core/service/city.service';
import { CustomErrorStateMatcher } from '../core/models/custom-error-state-matcher.model';
import { State } from '../core/models/state.model';
import { forkJoin } from 'rxjs';
import { StateService } from '../core/service/state.service';
import { Endpoints } from '../core/endpoints.enum';
import { CityDto } from '../core/models/city-dto.model';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  form: FormGroup;
  private matcher = new CustomErrorStateMatcher();
  states: State[];
  cities: City[];
  pageError: boolean = false; 

  constructor(private router: Router, private cityService: CityService,
    private snackBar: MatSnackBar, private stateService: StateService) {
      forkJoin(this.stateService.getAll(), 
      cityService.getAnyList(Endpoints.ORDER_BY_NAME))
      .subscribe(result => {
        if(!!result[0] && !result[0].message && !!result[0].payload){
          this.states = result[0].payload;
        }else{
          this.pageError = true;
        }
        if(!!result[1]){
          if(!!result[1].message){
            this.openSnackBar(result[1].message.toString());
          }else{
            this.cities = result[1].payload;
          }
        }
      });
  }

  ngOnInit() {
    this.form = new FormGroup({
      ibgeId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]*$')
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      nameWithOutAccent: new FormControl('', [
      ]),
      capital: new FormControl('', [
        Validators.required
      ]),
      alternativaName: new FormControl('', [
      ]),
      microRegion: new FormControl('', [
      ]),
      mesoRegion: new FormControl('', [
      ]),
      stateId: new FormControl('', [
        Validators.required
      ]),
      longitude: new FormControl('', [
        Validators.required
      ]),
      latitude: new FormControl('', [
        Validators.required
      ]),
    });
  }
  sendForm() {
    if (this.form.valid) {
      const idError: boolean = this.cities.filter(city => city.ibgeId === +this.form.value.id).length > 0;
      if (!idError) {
        const city = new CityDto(Object.assign({}, this.form.value));
        this.cityService.add(city).subscribe(
          (res) => {
            if(!!res.message){
              this.openSnackBar(res.message.toString());
            }
          }
        )
      } else {
        if (idError) {
          this.form.controls['id'].setErrors({ alreadyExists: true });
        }
      }
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500,
    });
  }
}
