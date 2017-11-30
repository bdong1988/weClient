import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    CartComponent
  ]
})
export class CartModule { }
