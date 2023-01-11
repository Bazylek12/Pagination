import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SingleProductSortComponent} from './components/single-product-sort/single-product-sort.component';
import {MultiJobsSearchComponent} from './components/multi-jobs-search/multi-jobs-search.component';
import {SingleProductFilterComponent} from './components/single-product-filter/single-product-filter.component';
import {MultiCarsFilterComponent} from './components/multi-cars-filter/multi-cars-filter.component';
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
  }]), SingleProductSortComponentModule, ProductsServiceModule, MultiJobsSearchComponentModule, JobPostsServiceModule, SingleProductFilterComponentModule, CategoriesServiceModule, MultiCarsFilterComponentModule, CarsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
