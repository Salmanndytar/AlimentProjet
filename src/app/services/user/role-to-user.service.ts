import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {RoleToUserDto} from "../../../model/RoleToUserDto";


  @Injectable({
  providedIn: 'root'
})
export class RoleToUserService {

  constructor( private http : HttpClient) { }
  public addRolToUser(roleToUser : RoleToUserDto):Observable<any>  {
    return this.http.post<RoleToUserDto>(environment.backendHost+'/AGlycemie/api/v1/roles/AddroleToUser',roleToUser) ;

  }
}
