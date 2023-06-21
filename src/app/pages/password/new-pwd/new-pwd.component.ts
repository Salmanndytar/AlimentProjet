import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PasswordDto} from "../../../../model/PasswordDto";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-new-pwd',
  templateUrl: './new-pwd.component.html',
  styleUrls: ['./new-pwd.component.scss']
})
export class NewPwdComponent implements OnInit {
  pwdFormgroup!: FormGroup;
  nomConforme!: boolean;
  loading!: boolean;
  mail!: string;
  pwdDto!: PasswordDto;

  constructor(
    private rout : Router,
    private  fb : FormBuilder,
    private  usr: UserService ,
    private activatedRoute :ActivatedRoute

  ) { }

  ngOnInit(): void {
   this. controlFG();
    this.activatedRoute.queryParams.subscribe(params => {
      this.mail = params['liam'];
    });
  }
  controlFG(){
       this.pwdFormgroup = this.fb.group({

       motDepasse : this.fb.control(null,[Validators.required,Validators.minLength(3)]),
        motDepasse1 : this.fb.control(null,[Validators.required,Validators.minLength(3)]),
        mail : this.fb.control(null,[Validators.required,Validators.minLength(3)])

       })
  }
  valide() {
    this.loading =true;
    this.nomConforme = this.pwdFormgroup.value.motDepasse !== this.pwdFormgroup.value.motDepasse1;
    if (!this.nomConforme) {
      this.pwdFormgroup.value.mail = this.mail;
      this.pwdDto = this.pwdFormgroup.value;
      this.usr.changPassword(this.pwdDto).subscribe({
      next: data =>{
        this.loading =false;
        this.pwdFormgroup.reset();
        alert("Votre mot de passe est changet") ;
        this.rout.navigate(['login']);
      } ,error:err => {
          this.loading =false;
          alert(err.error.message);
      }
    });
  }

  }
}
