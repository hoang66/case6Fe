import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProductComponent } from './show-product/show-product.component';
import {HttpClientModule} from "@angular/common/http";
import { ShowProductDTComponent } from './show-product-dt/show-product-dt.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { ShopComponent } from './shop/shop.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ShowProductComponent,
    ShowProductDTComponent,
    ShowCartComponent,
    ShopComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
