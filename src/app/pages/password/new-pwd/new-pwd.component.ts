import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";
import {ChangerMotdePassUtilisateurDto} from "../../../../model/ChangerMotdePassUtilisateurDto";

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
 // pwdDto!: ChangerMotdePassUtilisateurDto;

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
    localStorage.clear();
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
      let pwDto : ChangerMotdePassUtilisateurDto   = this.pwdFormgroup.value;
      console.log('mot de passe: '+pwDto.motDepasse);
      console.log('email: '+pwDto.mail);
      this.usr.changPassword(pwDto).subscribe({
      next: data =>{
        this.loading =false;

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
