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
  constructor(
     private   router : Router,
     private  fb :FormBuilder ,
     private security : Tocken


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
            this.security.stockTockenInLocalStorag(data);
             this.router.navigate([''],{queryParams:{role:'admin'}});

       } ,
       error:err => {
         console.log(err);
       }
     })
  }

}
