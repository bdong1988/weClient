import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'browse', pathMatch : 'full'},
  {path : 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
  {path : 'user', loadChildren: 'app/user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
