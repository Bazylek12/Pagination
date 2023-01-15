import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PaginatorCitiesComponent } from './paginator-cities.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [PaginatorCitiesComponent],
  providers: [],
  exports: [PaginatorCitiesComponent]
})
export class PaginatorCitiesComponentModule {
}
