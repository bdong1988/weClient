import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'browse', pathMatch : 'full'},
  {path : 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
  {path : 'user', loadChildren: 'app/user/user.module#UserModule'},
  {path : 'login', loadChildren: 'app/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{'useHash': true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
