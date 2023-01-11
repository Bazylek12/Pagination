import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { PaginatorPaginationsBeersComponent } from './paginator-paginations-beers.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [MatCardModule, MatPaginatorModule, NgIf, AsyncPipe, MatChipsModule, CommonModule],
  declarations: [PaginatorPaginationsBeersComponent],
  providers: [],
  exports: [PaginatorPaginationsBeersComponent]
})
export class PaginatorPaginationsBeersComponentModule {
}
