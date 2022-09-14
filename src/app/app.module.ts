import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProductComponent } from './show-product/show-product.component';
import {HttpClientModule} from "@angular/common/http";
import { ShowProductDTComponent } from './show-product-dt/show-product-dt.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ShowProductComponent,
    ShowProductDTComponent,
    ShowCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
