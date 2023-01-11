import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MultiCarsFilterComponent } from './multi-cars-filter.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatTableModule, FormsModule],
  declarations: [MultiCarsFilterComponent],
  providers: [],
  exports: [MultiCarsFilterComponent]
})
export class MultiCarsFilterComponentModule {
}
