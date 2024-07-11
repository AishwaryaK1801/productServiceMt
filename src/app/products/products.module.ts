import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductCardsComponent,
    ProductDashboardComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    ProductDashboardComponent
  ]
})
export class ProductsModule { }
