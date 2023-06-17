import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserDto} from "../../../model/UserDto";
import {UserService} from "../../services/user/user.service";
import {RoleToUserService} from "../../services/user/role-to-user.service";
import {RoleToUserDto} from "../../../model/RoleToUserDto";



@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {


  insFormgroup! : FormGroup;
   usr! : UserDto;




  constructor(
    private router : Router ,
    private fb : FormBuilder,
    private user : UserService,
    private rolUsr : RoleToUserService

  ) {  }

  ngOnInit(): void {
   this.groupControl();

  }
  code(): void{

  }
  groupControl(){
    this.insFormgroup = this.fb.group({
      nom : this.fb.control(null ,[Validators.required , Validators.minLength(2)]),
      prenom :this.fb.control(null,[Validators.required,Validators.minLength(2), Validators.maxLength(16)] ),
      tel :this.fb.control(null,[Validators.required]),
      mail :this.fb.control(null,[Validators.required, Validators.email]),
      motDePasse :this.fb.control(null,[Validators.required]),
       motdepasse2 :this.fb.control(null),
       role :this.fb.control(null),
       taille :this.fb.control(0),
       sexe:this.fb.control(null),
       poids:this.fb.control(0),
       etat:this.fb.control(false),
       code:this.fb.control(null)
    }) ;
  }

   assignRol(){
   let roUs : RoleToUserDto = this.insFormgroup.value;
       this.rolUsr.addRolToUser(roUs).subscribe(
       {
         next: data =>{
             this.router.navigate(['codeValidation'],
               {
                 queryParams: {
                   iezwx:this.id,
                   role:this.insFormgroup.value.role,
                   liam:this.insFormgroup.value.mail
                 }
               });
         },error : err => {
           console.log(err.messages);
         }
       }
     ) ;
   }
  id! : number | undefined;
  saveIns() {
     this.usr = this.insFormgroup.value;
     this.user.saveUsers( this.usr).subscribe(
        {
          next: data =>{
            this.id= data.id;
            this.assignRol()
          },error : err => {
          console.log(err.messages);
          }
        }
      ) ;
  }

  level : boolean[]=[true,false,false,false,false];
  next(value: number) {
    if (value ===2 && this.insFormgroup.value.role==='medecin' ) {
      value =value+1;
      this.level.splice(value-2,value-2, false)
    }

    this.level.splice(value-1,value-1, false);
    this.level.splice(value,value, true);

  }

}
