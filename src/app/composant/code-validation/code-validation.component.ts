import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
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
      this.id = params['iezwx'];
      this.role = params['role'];
      this.mail = params['liam'];
    });
  }

  controlFormgroup() {
    this.codFormgroup = this.fb.group({
      code: this.fb.control(null)
    });
  }

  frivCode() {
    this.usr.valideCode(this.codFormgroup.value.code, this.id).subscribe({
      next: data => {
        if (data) {
          this.router.navigate([''], {queryParams: {role: this.role}});
        }else alert('code invalide ou expirer')
      }, error: err => {
        console.log(err);
      }
    });
  }

  i : number =0;
  code() {
   if (this.codFormgroup.value.code !==null)
    if (this.codFormgroup.value.code.length > 5)
      this.frivCode();
  }

   errMessage!: string;
  loadin: boolean=false;
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
