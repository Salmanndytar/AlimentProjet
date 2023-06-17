import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "../../../model/UserDto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }
  public users():Observable<Array<UserDto>>{
   return  this.http.get<Array<UserDto>>(environment.backendHost+'/GlycemieAliment/V1/utilisateurs/all') ;

  }
  public searchUsers(kyword:string):Observable<Array<UserDto>>{
    return  this.http.get<Array<UserDto>>(environment.backendHost+'/GlycemieAliment/V1/utilisateurs/search?kyword='+kyword);

  }
  public saveUsers(usr:UserDto):Observable<UserDto>   {
    return this.http.post<UserDto>(environment.backendHost+'/GlycemieAliment/V1/utilisateurs/create',usr) ;

  }
  public valideCode(code:string,id:number):Observable<boolean>   {
    return this.http.get<boolean>(environment.backendHost+'/GlycemieAliment/V1/code/'+code+','+id) ;

  }

}
