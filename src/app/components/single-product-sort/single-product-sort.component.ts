import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductsService} from '../../services/products.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-single-product-sort',
  styleUrls: ['./single-product-sort.component.scss'],
  templateUrl: './single-product-sort.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductSortComponent {
  readonly orders$: Observable<string[]> = of(['asc', 'desc']);
  readonly productsList$: Observable<ProductModel[]> = this._activatedRoute.queryParams.pipe(
    switchMap(data => this._productsService.getSortedList(data['sort'])));

  constructor(private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }
}
