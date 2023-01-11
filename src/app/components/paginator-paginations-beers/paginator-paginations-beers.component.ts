import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

interface PaginatorData {
  pageNumber: number,
  perPage: number,
  pageOptions: number[],
  length: number,
}
@Component({
  selector: 'app-paginator-paginations-beers',
  templateUrl: './paginator-paginations-beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorPaginationsBeersComponent {
  readonly queryParams$: Observable<PaginatorData> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageNumber: params["pageNumber"] ? Math.max(1, +params["pageNumber"]) : 1,
      perPage: params["perPage"] ? Math.max(5, +params["perPage"]) : 5,
      pageOptions: [5, 10, 15],
      length: 100,
    }))
  );
  readonly beerList$: Observable<BeerModel[]> = this.queryParams$.pipe(
    switchMap(data => this._beersService.getAllBeers(data.pageNumber, data.perPage)));

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }

  onChange(event: { pageIndex: number, pageSize: number }): void {
    this._router.navigate([],{
      queryParams: {
        pageNumber: event.pageIndex + 1,
        perPage: event.pageSize,
      }
    })
    console.log(event)
  }
}
