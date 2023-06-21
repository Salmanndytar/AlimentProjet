import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {catchError, Observable, Subscriber, Subscription, throwError} from "rxjs";



@Component({
  selector: 'app-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.scss']
})
export class CodeValidationComponent implements OnInit {
  codFormgroup!: FormGroup;
  id!: number;
  role!: string;
  mail!: string;
  border!: string;
  origin!: string;
  loadin: boolean=false;



  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router ,
    private usr: UserService
  ) {
  }

  ngOnInit(): void {
    this.controlFormgroup();
    this.activatedRoute.queryParams.subscribe(params => {
      this.role = params['role'];
      this.mail = params['liam'];
      this.origin = params['origin'];
    });
  }

  controlFormgroup() {
    this.codFormgroup = this.fb.group({
      code: this.fb.control(null,[Validators.required , Validators.minLength(6)])
    });
  }

  frivCode() {
   this.loadin =true;
    this.usr.valideCode(this.codFormgroup.value.code, this.mail).subscribe({
      next: data => {
        if (data) {
          this.codFormgroup.reset();
          this.loadin =false;
          if (this.origin == "password")
            this.router.navigate(['newPwd'], {queryParams: {liam: this.mail}});
          else this.router.navigate([''], {queryParams: {role: this.role}});

        }else{
          this.codeInvalide = true;
          this.border = 'bordeRead';
          this.loadin =false;
        }
        this.codFormgroup.reset();
      }, error: err => {
        console.log(err);
        this.loadin =false;
      }
    });
  }

  codeInvalide : boolean =false;
  code() {
    this.codeInvalide=false;
    this.border = '';
   if (this.codFormgroup.value.code !==null)
    if (this.codFormgroup.value.code.length >5)   {
      this.frivCode();
   }
  }

   errMessage!: string;

  renvoieCode() {
    this.loadin =true;
     this.usr.rvoieCode(this.mail).subscribe({
        next : data =>{

        } ,
        error:err => {
          if (err.error.errors){
            alert(err.error.errors);
          }
          this.loadin =false;
        }
      }) ;

  }

}
