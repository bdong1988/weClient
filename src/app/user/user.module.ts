import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { ReceiversComponent } from './receivers/receivers.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [
    UserComponent,
    OrdersComponent,
    ReceiversComponent
  ]
})
export class UserModule { }
