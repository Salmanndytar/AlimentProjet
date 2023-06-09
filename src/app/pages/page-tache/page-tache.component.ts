import { Component, OnInit } from '@angular/core';
import {Accordion} from "../modal/Accordion";

@Component({
  selector: 'app-page-tache',
  templateUrl: './page-tache.component.html',
  styleUrls: ['./page-tache.component.scss']
})
export class PageTacheComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit(): void {

  }
  isView : boolean[]= Accordion.isView ;
  show :String = '';
  position : String ='';
  clickImg( i:number) {
    Accordion.clickImg(i) ;
    this.position= Accordion.position;
    this.show = Accordion.show;
  }
  clos(): void{
    Accordion.clos();
    this.position= Accordion.position;
    this.show = Accordion.show;
  }
}
