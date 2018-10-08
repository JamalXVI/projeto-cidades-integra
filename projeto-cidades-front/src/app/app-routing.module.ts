import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CuriositiesComponent } from './curiosities/curiosities.component';
import { AddCityComponent } from './add-city/add-city.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'curiosities',
      component: CuriositiesComponent
  },
  {
      path: 'add',
      component: AddCityComponent
  },
];
@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
