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

  constructor(private http:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8083/products");
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>("http://localhost:8083/products/" +id);
  }


}
