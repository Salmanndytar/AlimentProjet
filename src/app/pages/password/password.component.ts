import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  mailFormgroup! : FormGroup;
  loading: boolean = false;
  mailInvalide : boolean =false;
  notErr! : boolean ;
  formatIncorr!: boolean;



  constructor(
  private  usr:UserService,
  private  router : Router,
  private fb:  FormBuilder

) { }

  ngOnInit(): void {
    localStorage.clear();
   this.groupControl();
  }
  groupControl(){
    this.mailFormgroup = this.fb.group({
      mail :this.fb.control(null,[Validators.required, Validators.email]),
    }) ;
  }
  renvoieCode(email:string) {
    this.loading =true;
    this.usr.rvoieCode(email).subscribe({
      next : data =>{

      } ,
      error:err => {
        // if (err.error.errors || err.error.message){
        //   alert(err.error.errors +'  '+ err.error.message);
        // }
        this.loading =false;
      }
    }) ; }
  checkMail(){
    let mail =this.mailFormgroup.value.mail;
     this.loading = true;
    this.usr.chekMail(mail).subscribe({
      next : data =>{
        if (data) {
          this.mailFormgroup.reset();
          this.renvoieCode(mail);
          this.loading = false;
          this.router.navigate(['codeValidation'], {queryParams: {origin:'password', liam:mail}});

        }

      } ,error :err => {
      if (err.error.errors == "Mail incorrcte")  this.formatIncorr = true; else  this.formatIncorr = false;
      if (err.error.errors == null)  this.mailInvalide = true; else this.mailInvalide= false;
       this.notErr =  !err.error.code;
        this.loading =false;
      }
    });
   }




}
