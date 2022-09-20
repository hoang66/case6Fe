import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[]

  constructor(private http: HttpClient) {
  }

  getAll(page: number): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8083/products/page/"+page);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>("http://localhost:8083/products/" + id);
  }

  findByIdCata(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(" http://localhost:8083/products/catagorie/" + id);
  }

  findByIdS(nameSt: any): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8083/products/product/" + nameSt);
  }

  updateProduct(id: number): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8083/products/editproduct/" + id);
  }

  create(product: Product){
    let check=true;

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i] = product;
        check = false;
      }
    }

    if (check){
      this.products.push(product);
    }
  }

  delete(id: number): void {
    for (let i = 0; i < this.products.length; i++) {
      if (id === this.products[i].id) {
        this.products.splice(i, 1);
      }
    }
  }
}

