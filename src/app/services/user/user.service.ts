import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "../../../model/UserDto";
import {environment} from "../../../environments/environment";
import { ChangerMotdePassUtilisateurDto} from "../../../model/ChangerMotdePassUtilisateurDto";



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
    return  this.http.get<Array<UserDto>>(environment.backendHost+'/AGlycemie/api/v1/utilisateurs/search?kyword='+kyword);

  }
  public saveUsers(usr:UserDto):Observable<UserDto>   {
    return this.http.post<UserDto>(environment.backendHost+'/AGlycemie/api/v1/utilisateurs/create',usr) ;

  }
  public valideCode(code:string,mail:string):Observable<boolean>   {
    return this.http.get<boolean>(environment.backendHost+'/AGlycemie/api/v1/auth/validerCode/'+code+','+'{mail}?mail='+mail) ;

  } public rvoieCode(mail:string):Observable<string>   {
    return this.http.get<string>(environment.backendHost+'/AGlycemie/api/v1/auth/genereCode/'+mail) ;
  }
  public chekMail(mail:string):Observable<boolean>   {
    return this.http.get<boolean>(environment.backendHost+'/AGlycemie/api/v1/auth/chekMail/'+mail) ;
  }

  public changPassword(pwd:ChangerMotdePassUtilisateurDto):Observable<ChangerMotdePassUtilisateurDto>   {
    return this.http.post<ChangerMotdePassUtilisateurDto>(environment.backendHost+'/AGlycemie/api/v1/auth/password', pwd) ;
  }
  public deletUser(id?: number):Observable<any>   {
    return this.http.delete(environment.backendHost+'/AGlycemie/api/v1/utilisateurss/delete/'+id) ;
  }
}
