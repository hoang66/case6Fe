import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowProductComponent} from "./show-product/show-product.component";
import {ShowCartComponent} from "./show-cart/show-cart.component";
import {ShowProductDTComponent} from "./show-product-dt/show-product-dt.component";
import {LoginComponent} from "./login/login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {ShopComponent} from "./shop/shop.component";
import {ShowProductAdminComponent} from "./admin/show-product-admin/show-product-admin.component";

// @ts-ignore
const routes: Routes = [
  {path: '', component: ShowProductComponent},
  {
    path:'showcart',component:ShowCartComponent
  },
  {path: 'detail/:id', component: ShowProductDTComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ShopComponent},
  {path: 'product/:nameSt', component: ShopComponent},
  {path: 'showproductadmin', component: ShowProductAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
