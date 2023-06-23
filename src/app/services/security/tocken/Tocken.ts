import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationRequest} from "../auth/AuthenticationRequest";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {AuthenticationResponse} from "../auth/AuthenticationResponse";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class Tocken {

  constructor(
    private http:HttpClient,
   private router :Router
  ) { }


  public generetTocken(request:AuthenticationRequest):Observable<AuthenticationResponse> {
   return this.http.post<AuthenticationResponse>(environment.backendHost+'/GlycemieAliment/V1/aut/authenticate',request);
  }
  public stockTockenInLocalStorag(authrepons:AuthenticationResponse){
    localStorage.setItem('secret',JSON.stringify(authrepons));
  }
  public isUserConnectedAndTockonValid():boolean{
   if (localStorage.getItem('secret')){
     return true;
   }
   this.router.navigate(['login']);
   return false;
  }





}
