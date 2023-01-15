import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, combineLatest, of, take, shareReplay} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {CityModel} from '../../models/city.model';
import {CititesService} from '../../services/citites.service';
import {MatSelectionListChange} from "@angular/material/list";

interface queryModel {
  pageSize: number,
  pageNumber: number,
}

@Component({
  selector: 'app-paginator-cities',
  templateUrl: './paginator-cities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorCitiesComponent {
  readonly pageSizes$: Observable<number[]> = of([5, 10, 15])
  readonly citiesList$: Observable<CityModel[]> = this._cititesService.getAll().pipe(shareReplay(1));
  readonly queryParams$: Observable<queryModel> = this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageSize: params['pageSize'] ? +params['pageSize'] : 5,
      pageNumber: params['pageNumber'] ? +params['pageNumber'] : 1,
    })),
  );
  readonly pagesList$: Observable<number[]> = combineLatest([
    this.citiesList$,
    this.queryParams$,
  ]).pipe(
    map(([cities, params]) => {
        const pages: number[] = [];
        for (let i = 1; i <= Math.ceil(cities.length / params.pageSize); i++) {
          pages.push(i);
        }
        return pages;
      }
    ),
  )
  readonly paginatedCities$: Observable<CityModel[]> = combineLatest([
    this.citiesList$,
    this.queryParams$,
  ]).pipe(
    map(([cities, params]) =>
      cities.slice((params.pageNumber - 1) * params.pageSize, params.pageSize * params.pageNumber)
    ),
  )

  constructor(private _cititesService: CititesService, private _activatedRoute: ActivatedRoute, private _router: Router
  ) {
  }

  onPageNumberChange(event: MatSelectionListChange): void {
    this.queryParams$.pipe(
      take(1),
      tap((params) =>
        this._router.navigate([], {
          queryParams: {
            pageNumber: event.options[0].value,
            pageSize: params.pageSize
          }
        })
      )
    ).subscribe()
  }

  onPageSizeChange(event: MatSelectionListChange): void {
    combineLatest([this.queryParams$, this.citiesList$])
      .pipe(
        take(1),
        tap(([params, cities]) =>
          this._router.navigate([], {
            queryParams: {
              pageNumber: Math.min(Math.ceil(cities.length / event.options[0].value), params.pageNumber),
              pageSize: event.options[0].value
            }
          })
        )
      ).subscribe()
    console.log(event)
  }
}
