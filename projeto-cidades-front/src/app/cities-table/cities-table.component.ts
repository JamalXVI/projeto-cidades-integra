import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subject } from 'rxjs/internal/Subject';
import { City } from '../core/models/city.model';
import { DEFAULT_PAGE_SIZE_OPTION, PAGE_SIZE_OPTIONS, CityFilter } from '../core/constants';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { set } from 'lodash';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.css']
})
export class CitiesTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private _cities: City[];
  get cities(): City[] {
    // transform value for display
    return this._cities;
  }
  
  @Input()
  set cities(cities: City[]) {
    this._cities = cities;
    this.fullfillCities();
  }

  search$: Subject<any> = new Subject<any>();
  filters: any = {};
  dataSource: MatTableDataSource<City>;
  defaultPageSize: Number = DEFAULT_PAGE_SIZE_OPTION;
  pageSizes: Number[] = PAGE_SIZE_OPTIONS;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ibgeId', 'state', 'name', 'nameWithOutAccent', 'alternativaName',
    'capital', 'longitude', 'latitude', 'microRegion', 'mesoRegion', 'actions'];
  constructor() {
    this.search$.pipe(map(query => query || ''), distinctUntilChanged(),
      map((column: { search: any, prop: string }) => set(this.filters, column.prop, column.search)))
      .subscribe(filters => this.dataSource.filter = JSON.stringify(filters));
  }

  ngOnInit() {
    this.fullfillCities();
  }
  private fullfillCities(){
    this.dataSource = new MatTableDataSource(this.cities);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = this.createFilter();
  }
  createFilter(): (data: City, filter: string) => boolean {
    const filterFunction = function (data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return CityFilter(data, searchTerms);
    };
    return filterFunction;
  }
  onCapitalChange($event){
    this.search$.next({search: $event.value, prop: 'capital'});
  }

}
