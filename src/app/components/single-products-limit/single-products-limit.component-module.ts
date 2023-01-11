import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SingleProductsLimitComponent } from './single-products-limit.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonToggleModule, MatListModule, MatButtonModule, MatMenuModule, MatIconModule],
  declarations: [SingleProductsLimitComponent],
  providers: [],
  exports: [SingleProductsLimitComponent]
})
export class SingleProductsLimitComponentModule {
}
