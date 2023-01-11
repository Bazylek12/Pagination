import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import { BrandModel } from '../../models/brand.model';
import { ComfortFeatureModel } from '../../models/comfort-feature.model';
import { CarModel } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';
import {map} from "rxjs/operators";

interface filteredData {
  brands: Set<string>,
  comfortFeatures: Set<string>,
}
@Component({
  selector: 'app-multi-cars-filter',
  templateUrl: './multi-cars-filter.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiCarsFilterComponent {
  readonly brandsList$: Observable<BrandModel[]> = this._carsService.getBrands();
  readonly comfortFeaturesList$: Observable<ComfortFeatureModel[]> = this._carsService.getComfortFeatures();
  readonly filteredList$: Observable<filteredData> = this._activatedRoute.queryParams.pipe(
    map((params) : filteredData => ({
        brands: new Set<string>(params['brands'] === undefined ? [] :  params['brands'].split(',') ),
        comfortFeatures: new Set<string>(params['comfort-features'] === undefined ? [] : params['comfort-features'].split(','))
    }))
  );
  readonly carsList$: Observable<CarModel[]> = combineLatest([
    this._carsService.getCars(),
    this.filteredList$
  ]).pipe(
    map(([cars, list]) =>
      cars.filter(car => list.brands.size === 0 || list.brands.has(car.brandId)
      ).filter(car => list.comfortFeatures.size === 0 || [car.comfortFeatureIds].filter((id) => list.comfortFeatures.has(id))
    ))
  )

  onBrandSelected(id: string, isSelected: boolean) {
    this._router.navigate([],{
      queryParams: {
        brands: id,
      }
    })
    console.log(isSelected, id)
  }
  constructor(private _carsService: CarsService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

}
