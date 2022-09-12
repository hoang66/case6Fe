import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowProductComponent} from "./show-product/show-product.component";
import {ShowProductDTComponent} from "./show-product-dt/show-product-dt.component";

const routes: Routes = [
  {path: '', component: ShowProductComponent},
  {path: 'detail/:id', component: ShowProductDTComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
