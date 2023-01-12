import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable, shareReplay, take} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {BeersService} from '../../services/beers.service';
import {BeerModel} from "../../models/beer.model";

@Component({
  selector: 'app-simple-pagination-beers',
  templateUrl: './simple-pagination-beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplePaginationBeersComponent {
  readonly queryParams$: Observable<number> = this._activatedRoute.queryParams.pipe(
    map((params) =>
        params["pageNumber"] ? Math.max(1, +params["pageNumber"]) : 1,
      )
    );
  readonly beersList$: Observable<BeerModel[]> = this.queryParams$.pipe(
    switchMap(
      currentPage => this._beersService.getAllBeers(currentPage, 10)
    ),
    shareReplay(1)
  );
  readonly paginationState$: Observable<{ isFirst: boolean, isLast: boolean }> = combineLatest([
    this.queryParams$,
    this.beersList$,
  ]).pipe(
    map(([currentPage, beers]) =>
      ({
        isFirst: currentPage === 1,
        isLast: beers.length < 10,
      })
    )
  )

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }

  onNextClick() : void {
    this.queryParams$.pipe(
      take(1),
      tap((currentPage) =>
        this._router.navigate([], {
          queryParams: {
            pageNumber: currentPage + 1,
          }
        })
      )
    ).subscribe()
  }

  onPrevClick() : void {
    this.queryParams$.pipe(
      take(1),
      tap((currentPage) =>
        this._router.navigate([], {
          queryParams: {
            pageNumber: currentPage - 1,
          }
        })
      )
    ).subscribe()
  }
}
