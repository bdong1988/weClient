import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticationService } from './authentication.service';

import { SharedModule } from '../shared/shared.module';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BottomNavBarComponent,
    TopBarComponent,
    LoginDialogComponent
  ],
  declarations: [
    BottomNavBarComponent,
    TopBarComponent,
    LoginDialogComponent
  ],
  providers: [
    ProductService,
    ShoppingCartService,
    AuthenticationService
  ]
})
export class CoreModule { }
