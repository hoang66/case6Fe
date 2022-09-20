import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {Catagorie} from "../model/Catagorie";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CatagorieService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Catagorie[]> {
    return this.http.get<Catagorie[]>("http://localhost:8083/shop");
  }
}
