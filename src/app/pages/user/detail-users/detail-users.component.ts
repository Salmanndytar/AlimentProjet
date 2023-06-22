import { Component, OnInit } from '@angular/core';
import {UserDto} from "../../../../model/UserDto";
import {UserService} from "../../../services/user/user.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.scss']
})
export class DetailUsersComponent implements OnInit {
    users! : Observable<Array<UserDto>>;
    errMessage! :string;
    searchFormGroup : FormGroup | undefined;
   constructor(
    private usr : UserService,
    private formBud : FormBuilder
  ) { }

  ngOnInit(): void {
     this.searchFormGroup = this.formBud.group(
       {
             kyword : this.formBud.control("")
       }
     );
     this.submit();
  }

  submit() {
     let kw = this.searchFormGroup?.value.kyword;
    this.users =   this.usr.searchUsers(kw).pipe(
      catchError(err => {
        this.errMessage = 'list utilisateurs sera afficher ici';
        return throwError(err)
      })
    );
  }


  delete(us: UserDto) {
     let conf =  confirm('Voulez-vous vraiment supprimer?');
      if (!conf) return;
        this.usr.deletUser(us.id).subscribe({
          next :oper =>{
            this.users = this.users.pipe(
              map(data =>{//parcourir users par "map"et recevoir ses donnees dans "data";
                let index = data.indexOf(us);//recurer l'index de l'objet "us" de al liste deta
                data.slice( index,1);//supprimer un element de "data" avec cet index;
                return data;
              })
            ) ;
            //ou simplement rechager a nouveau en appelant la fonction "this.submit()"
          } , error:err => {
            console.log(err);
          }
        })  ;
  }
}
