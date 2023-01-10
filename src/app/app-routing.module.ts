import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SingleProductSortComponent} from './components/single-product-sort/single-product-sort.component';
import {MultiJobsSearchComponent} from './components/multi-jobs-search/multi-jobs-search.component';
import {SingleProductSortComponentModule} from './components/single-product-sort/single-product-sort.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {MultiJobsSearchComponentModule} from './components/multi-jobs-search/multi-jobs-search.component-module';
import {JobPostsServiceModule} from './services/job-posts.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'single-product-sort',
    component: SingleProductSortComponent
  }, {
    path: 'multi-jobs-search',
    component: MultiJobsSearchComponent
  }]), SingleProductSortComponentModule, ProductsServiceModule, MultiJobsSearchComponentModule, JobPostsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
