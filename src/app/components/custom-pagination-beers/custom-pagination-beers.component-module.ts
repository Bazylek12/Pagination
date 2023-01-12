import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { CustomPaginationBeersComponent } from './custom-pagination-beers.component';

@NgModule({
  imports: [MatCardModule, ReactiveFormsModule, MatButtonToggleModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule, MatListModule],
  declarations: [CustomPaginationBeersComponent],
  providers: [],
  exports: [CustomPaginationBeersComponent]
})
export class CustomPaginationBeersComponentModule {
}
