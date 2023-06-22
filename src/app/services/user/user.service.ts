import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "../../../model/UserDto";
import {environment} from "../../../environments/environment";
import { PasswordDto} from "../../../model/PasswordDto";


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
  public valideCode(code:string,mail:string):Observable<boolean>   {
    return this.http.get<boolean>(environment.backendHost+'/GlycemieAliment/V1/code/'+code+','+'{mail}?mail='+mail) ;

  } public rvoieCode(mail:string):Observable<string>   {
    return this.http.get<string>(environment.backendHost+'/GlycemieAliment/V1/utilisateurs/genereCode/'+mail) ;
  }
  public chekMail(mail:string):Observable<any>   {
    return this.http.get<String>(environment.backendHost+'/GlycemieAliment/V1/utilisateurs/checkMail/'+mail) ;
  }

  public changPassword(pwd:PasswordDto):Observable<PasswordDto>   {
    return this.http.post<PasswordDto>(environment.backendHost+'/GlycemieAliment/V1/utilisateurs/password', pwd) ;
  }
  public deletUser(id?: number):Observable<any>   {
    return this.http.delete(environment.backendHost+'/GlycemieAliment/V1/utilisateurs/delete/'+id) ;
  }
}
