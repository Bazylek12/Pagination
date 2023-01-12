import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SingleProductSortComponent} from './components/single-product-sort/single-product-sort.component';
import {MultiJobsSearchComponent} from './components/multi-jobs-search/multi-jobs-search.component';
import {SingleProductFilterComponent} from './components/single-product-filter/single-product-filter.component';
import {MultiCarsFilterComponent} from './components/multi-cars-filter/multi-cars-filter.component';
import {SingleProductsLimitComponent} from './components/single-products-limit/single-products-limit.component';
import {
  PaginatorPaginationsBeersComponent
} from './components/paginator-paginations-beers/paginator-paginations-beers.component';
import {SimplePaginationBeersComponent} from './components/simple-pagination-beers/simple-pagination-beers.component';
import {CustomPaginationBeersComponent} from './components/custom-pagination-beers/custom-pagination-beers.component';
import {SingleProductSortComponentModule} from './components/single-product-sort/single-product-sort.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {MultiJobsSearchComponentModule} from './components/multi-jobs-search/multi-jobs-search.component-module';
import {JobPostsServiceModule} from './services/job-posts.service-module';
import {
  SingleProductFilterComponentModule
} from './components/single-product-filter/single-product-filter.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {MultiCarsFilterComponentModule} from './components/multi-cars-filter/multi-cars-filter.component-module';
import {CarsServiceModule} from './services/cars.service-module';
import {
  SingleProductsLimitComponentModule
} from './components/single-products-limit/single-products-limit.component-module';
import {
  PaginatorPaginationsBeersComponentModule
} from './components/paginator-paginations-beers/paginator-paginations-beers.component-module';
import {BeersServiceModule} from './services/beers.service-module';
import {
  SimplePaginationBeersComponentModule
} from './components/simple-pagination-beers/simple-pagination-beers.component-module';
import {
  CustomPaginationBeersComponentModule
} from './components/custom-pagination-beers/custom-pagination-beers.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'single-product-sort',
    component: SingleProductSortComponent
  }, {path: 'multi-jobs-search', component: MultiJobsSearchComponent}, {
    path: 'single-product-filter/:category',
    component: SingleProductFilterComponent
  }, {path: 'single-product-filter', component: SingleProductFilterComponent}, {
    path: 'multi-cars-filter',
    component: MultiCarsFilterComponent
  }, {path: 'limit-products', component: SingleProductsLimitComponent}, {
    path: 'paginator-pagination-beers',
    component: PaginatorPaginationsBeersComponent
  }, {path: 'simple-pagination-beers', component: SimplePaginationBeersComponent}, {
    path: 'beers-custom',
    component: CustomPaginationBeersComponent
  }]), SingleProductSortComponentModule, ProductsServiceModule, MultiJobsSearchComponentModule, JobPostsServiceModule, SingleProductFilterComponentModule, CategoriesServiceModule, MultiCarsFilterComponentModule, CarsServiceModule, SingleProductsLimitComponentModule, PaginatorPaginationsBeersComponentModule, BeersServiceModule, SimplePaginationBeersComponentModule, CustomPaginationBeersComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
