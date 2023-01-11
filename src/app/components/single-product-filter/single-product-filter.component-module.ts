import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SingleProductFilterComponent } from './single-product-filter.component';
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, RouterLink, MatPaginatorModule, RouterLink],
  declarations: [SingleProductFilterComponent],
  providers: [],
  exports: [SingleProductFilterComponent]
})
export class SingleProductFilterComponentModule {
}
