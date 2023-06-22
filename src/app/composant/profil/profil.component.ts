import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
hid : String[] = ['','hidden'];
  origin = '';
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Recuperer les donnees dans router precisement de children dont les data de composant profil
  this.activateRoute.data.subscribe((data) => {
    this.origin = data['var1']+' + '+data['var2'];
    console.log(this.origin)
  });

  }
optionHide(): void{
  this.hid.splice(0,0,'hidden')
  this.hid.splice(1,1,'')
}

  optionInfo() {
    this.hid.splice(0,0,'')
    this.hid.splice(1,1,'hidden')
  }
}
