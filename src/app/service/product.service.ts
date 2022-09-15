import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(page: number): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8084/products/page/"+page);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>("http://localhost:8084/products/" + id);
  }

  findByIdCata(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(" http://localhost:8084/products/catagorie/" + id);
  }

  findByIdS(nameSt: any): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8084/products/product/" + nameSt);

  }

}

