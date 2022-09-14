import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserToken} from "../model/UserToken";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user: any): Observable<any>{
    return this.http.post<any>("http://localhost:8083/login",user)
  }

  register(user: any): Observable<any>{
    return this.http.post<any>("http://localhost:8083/register",user)
  }

  setToken(token: any){
    localStorage.setItem("token",token)
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setUserToken(userToken: UserToken){
    localStorage.setItem("userToken",JSON.stringify(userToken));
  }

  getUserToken(): UserToken{
    return JSON.parse(<string>localStorage.getItem("userToken"));
  }
}
