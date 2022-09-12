import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProductComponent } from './show-product/show-product.component';
import {HttpClientModule} from "@angular/common/http";
import { ShowProductDTComponent } from './show-product-dt/show-product-dt.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowProductComponent,
    ShowProductDTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
