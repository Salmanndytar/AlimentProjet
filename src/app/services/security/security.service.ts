import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationRequest} from "./auth/AuthenticationRequest";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthenticationResponse} from "./auth/AuthenticationResponse";


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private http:HttpClient
  ) { }


  public generetTocken(request:AuthenticationRequest):Observable<AuthenticationResponse> {
   return this.http.post<AuthenticationResponse>(environment.backendHost+'/GlycemieAliment/V1/aut/authenticate',request);
  }
  public accessTocken(tocken:string):HttpHeaders{
  let  header = new HttpHeaders().set('Authorization',tocken);
    return   header;
  }




}
