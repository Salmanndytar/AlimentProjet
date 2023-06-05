import { Component, OnInit } from '@angular/core';
import {sms} from '../../composant/bouton-action/bouton-action.component';
import {Router} from "@angular/router";
import {BoutonActionComponent} from "../../composant/bouton-action/bouton-action.component";

@Component({
  selector: 'app-page-aliment',
  templateUrl: './page-aliment.component.html',
  styleUrls: ['./page-aliment.component.scss']
})
export class PageAlimentComponent implements OnInit {
test : String = 'deux';

val : boolean[]=[true]
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    sms.splice(0,0,false);

  }
  nouvelAliment():void{

   this.router.navigate(['nouvelaliment'])
  }

  mousseout() {
    this.val.splice(0,0,false)
  }  moussenter() {
    this.val.splice(0,0,true)
  }
}
