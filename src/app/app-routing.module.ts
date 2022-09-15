import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowProductComponent} from "./show-product/show-product.component";
import {ShowCartComponent} from "./show-cart/show-cart.component";
import {ShowProductDTComponent} from "./show-product-dt/show-product-dt.component";
import {LoginComponent} from "./login/login/login.component";
import {RegisterComponent} from "./login/register/register.component";

const routes: Routes = [
  {path: '', component: ShowProductComponent},
  {
    path: 'showcart', component: ShowCartComponent
  },
  {path: 'detail/:id', component: ShowProductDTComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
