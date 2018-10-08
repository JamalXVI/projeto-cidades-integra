import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

/** Material Design Modules */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { CitiesTableComponent } from './cities-table/cities-table.component';

/** Add Fort-Awesome icons into the library */
library.add(faSearch, faCheckCircle);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LoadingDialogComponent,
    CitiesTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpModule

  ],
  entryComponents: [LoadingDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
