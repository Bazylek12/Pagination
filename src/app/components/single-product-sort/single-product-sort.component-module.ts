import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatChipsModule } from '@angular/material/chips';
import { SingleProductSortComponent } from './single-product-sort.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule, MatChipsModule, RouterLinkActive, RouterLink],
  declarations: [SingleProductSortComponent],
  providers: [],
  exports: [SingleProductSortComponent]
})
export class SingleProductSortComponentModule {
}
