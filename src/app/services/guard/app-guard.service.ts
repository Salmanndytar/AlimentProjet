import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Tocken} from "../security/tocken/Tocken";

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate{

  constructor( private security : Tocken) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.security.isUserConnectedAndTockonValid();
  }
}
