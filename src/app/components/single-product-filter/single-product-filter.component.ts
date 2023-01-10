import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {CategoriesService} from '../../services/categories.service';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-single-product-filter',
  templateUrl: './single-product-filter.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleProductFilterComponent {
  readonly categoryList$: Observable<string[]> = this._categoriesService.getAll();
  readonly productsList$: Observable<ProductModel[]> = this._activatedRoute.params.pipe(
    switchMap(data => this._productsService.getProductsInCategory(data["category"])
    )
  );

  constructor(private _categoriesService: CategoriesService, private _activatedRoute: ActivatedRoute, private _productsService: ProductsService) {
  }
}
