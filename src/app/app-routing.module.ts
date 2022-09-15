import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowProductComponent} from "./show-product/show-product.component";
import {ShowCartComponent} from "./show-cart/show-cart.component";
import {ShowProductDTComponent} from "./show-product-dt/show-product-dt.component";
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [
  {path: '', component: ShowProductComponent},
  {
    path:'showcart',component:ShowCartComponent
  },
  {path: 'detail/:id', component: ShowProductDTComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ShopComponent},
  {path: 'product/:nameSt', component: ShopComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
