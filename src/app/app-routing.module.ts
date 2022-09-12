import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowProductComponent} from "./show-product/show-product.component";

const routes: Routes = [
  {path: '', component: ShowProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
