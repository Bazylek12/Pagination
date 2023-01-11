import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ProductsService} from '../../services/products.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-single-products-limit',
  templateUrl: './single-products-limit.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductsLimitComponent {
  readonly limit: FormControl = new FormControl([])
  readonly limit$: Observable<number[]> = of([5, 10, 15])
  readonly queryParams$: Observable<number> = this._activatedRoute.queryParams.pipe(
    map((params) =>
      params['limit'] ? params['limit'] : 5
    ));
  readonly productsList$: Observable<ProductModel[]> = this.queryParams$.pipe(
    switchMap(data => this._productsService.getLimitedProducts(+data)));

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService, private _router: Router) {
  }


  onChangeLimit(item: number) {
    this._router.navigate([], {
      queryParams: {
        limit: item
      }
    })
    console.log(item)
  }

  setLimit(item: number) {
    this.limit.setValue(item)
    this._router.navigate([], {
      queryParams: {
        limit: item
      }
    })
  }
}
