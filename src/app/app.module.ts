import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProductComponent } from './show-product/show-product.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ShowProductDTComponent } from './show-product-dt/show-product-dt.component';
import { ShowCartComponent } from './show-cart/show-cart.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthInterceptor} from "./auth.interceptor";



@NgModule({
  declarations: [
    AppComponent,
    ShowProductComponent,
    ShowProductDTComponent,
    ShowCartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
