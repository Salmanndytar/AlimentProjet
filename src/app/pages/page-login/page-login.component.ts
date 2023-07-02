import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tocken} from "../../services/security/tocken/Tocken";
import {AuthenticationRequest} from "../../services/security/auth/AuthenticationRequest";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  loFormGroup!: FormGroup;
  authRequest! : AuthenticationRequest;
  loading: boolean = false;
  mailInvalide : boolean =false;
  notErr! : boolean ;
  formatIncorr!: boolean;
  constructor(
     private   router : Router,
     private  fb :FormBuilder ,
     private security : Tocken


  ) {

  }

  ngOnInit(): void {
      this.forLogControl();
      localStorage.clear();
  }
  forLogControl(){
    this.loFormGroup = this.fb.group({
      login : this.fb.control(null,[Validators.required]),
      password : this.fb.control(null,[Validators.required]),
      autType : this.fb.control(null),
      isRefreshToken : this.fb.control(null),
      refreshToken : this.fb.control(null)

    })
  }
  loginok(){
    this.loading =true;
    this.loFormGroup.value.autType = 'password';
    this.loFormGroup.value.isRefreshToken = true;

     this.authRequest =this.loFormGroup.value;
     this.security.generetTocken(this.authRequest).subscribe({
       next: data =>{
            this.security.stockTockenInLocalStorag(data);

             this.router.navigate(['']/*{queryParams:{role:'admin'}}*/);

       } ,
       error:err => {
         if (err.error.code)
           alert(err.error.errors+'\n'+err.error.message)
         this.notErr =  !err.error.code;
         this.loading =false;
         console.log(err);
       }
     })
  }

}
