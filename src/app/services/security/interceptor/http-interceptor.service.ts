import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../auth/AuthenticationResponse";

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService /*implements HttpInterceptor*/{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authentificationRepons :AuthenticationResponse ={};
    if (localStorage.getItem('secret')){
      authentificationRepons = JSON.parse(
        localStorage.getItem('secret') as string
      );
    }

      const headers = req.headers.append('AUTHORIZATION', 'Bearer '+ authentificationRepons.accessToken);

      return next.handle(req.clone({ headers }));

  //   const authRequest = req.clone({
  //     headers: new HttpHeaders( {
  //       AUTHORIZATION:'Bearer '+ authentificationRepons.accessToken ,
  //
  //     })
  //   });
  //      return next.handle(authRequest);
   }
}
