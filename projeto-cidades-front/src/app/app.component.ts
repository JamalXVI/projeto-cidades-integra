import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { distinctUntilChanged } from 'rxjs/operators';

import { LoadingService } from './core/service/loading.service';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto Cidades';
  constructor(private dialog: MatDialog, private loadingService: LoadingService){
    this.loadingService.isLoading()
    .pipe(distinctUntilChanged())
    .subscribe(isLoading => {
      if(isLoading){
        this.dialog.open(LoadingDialogComponent, {
          minHeight: "200px",
          disableClose: true
        });
      }else{
        this.dialog.closeAll();
      }
    });    
  }
}
