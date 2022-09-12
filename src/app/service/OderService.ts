import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OderProduct} from "../model/OderProduct";



@Injectable({
  providedIn: 'root'
})
export class OderService {

  constructor(private http:HttpClient) { }

  getOderByuser(): Observable<OderProduct[]> {
    return this.http.get<OderProduct[]>("http://localhost:8080/order/User/{{id}}");
  }
}
