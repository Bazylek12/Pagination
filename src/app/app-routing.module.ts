import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SingleProductSortComponent} from './components/single-product-sort/single-product-sort.component';
import {SingleProductSortComponentModule} from './components/single-product-sort/single-product-sort.component-module';
import {ProductsServiceModule} from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'single-product-sort',
    component: SingleProductSortComponent
  }]), SingleProductSortComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
