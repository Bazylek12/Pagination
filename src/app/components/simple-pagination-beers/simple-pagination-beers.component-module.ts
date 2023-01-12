import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SimplePaginationBeersComponent } from './simple-pagination-beers.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [SimplePaginationBeersComponent],
  providers: [],
  exports: [SimplePaginationBeersComponent]
})
export class SimplePaginationBeersComponentModule {
}
