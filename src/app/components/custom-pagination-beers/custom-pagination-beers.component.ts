import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {BeersService} from '../../services/beers.service';
import {BeerModel} from "../../models/beer.model";

@Component({
  selector: 'app-custom-pagination-beers',
  templateUrl: './custom-pagination-beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPaginationBeersComponent {
  readonly limitOptions$: Observable<number[]> = of([5, 10, 15]);
  readonly pageOptions$: Observable<number[]> = of([1, 2, 3, 4, 5])
  readonly pageForm: FormGroup = new FormGroup({
    limit: new FormControl(),
    page: new FormControl(),
  });
  readonly queryParams$: Observable<{ pageNumber: number, perPage: number }> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageNumber: params["pageNumber"] ? +params["pageNumber"] : 1,
      perPage: params["perPage"] ? +params["perPage"] : 5,
    }))
  );
  readonly beersList$: Observable<BeerModel[]> = this.queryParams$.pipe(
    switchMap(data =>
      this._beersService.getAllBeers(data.pageNumber, data.perPage)
    )
  );

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }

  onChangeLimit(item: number) {
    const limit = this.pageForm.controls['limit'].value
    this._router.navigate([], {
      queryParams: {
        pageNumber: this.pageForm.controls['page'].value,
        perPage: limit
      }
    })
    console.log(item)
  }
  onChangePage(item: number) {
    const page = this.pageForm.controls['page'].value
    this._router.navigate([], {
      queryParams: {
        pageNumber: page,
        perPage: this.pageForm.controls['limit'].value,
      }
    })
    console.log(item)
  }

}
