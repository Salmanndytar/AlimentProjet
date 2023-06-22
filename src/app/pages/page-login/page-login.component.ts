import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../services/security/security.service";
import {AuthenticationRequest} from "../../services/security/auth/AuthenticationRequest";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  loFormGroup!: FormGroup;
  authRequest! : AuthenticationRequest;
  constructor(
     private   router : Router,
     private  fb :FormBuilder ,
     private security : SecurityService


  ) {

  }

  ngOnInit(): void {
      this.forLogControl();
  }
  forLogControl(){
    this.loFormGroup = this.fb.group({
      login : this.fb.control(null,[Validators.required]),
      password : this.fb.control(null,[Validators.required])
    })
  }
  loginok(){
     this.authRequest =this.loFormGroup.value;
     this.security.generetTocken(this.authRequest).subscribe({
       next: data =>{
             localStorage.setItem('authRepons',JSON.stringify(data));
             this.router.navigate(['inscription'],{queryParams:{role:'admin'}});

       } ,
       error:err => {
         console.log(err);
       }
     })
  }

}
