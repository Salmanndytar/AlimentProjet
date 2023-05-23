import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-aliment',
  templateUrl: './page-aliment.component.html',
  styleUrls: ['./page-aliment.component.scss']
})
export class PageAlimentComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  nouvelAliment():void{
   this.router.navigate(['nouvelaliment'])
  }

}
