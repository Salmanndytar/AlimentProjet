import { Component, OnInit } from '@angular/core';
import {Accordion} from "../modal/Accordion";

@Component({
  selector: 'app-page-patient',
  templateUrl: './page-patient.component.html',
  styleUrls: ['./page-patient.component.scss']
})
export class PagePatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isView : boolean[]= Accordion.isView ;
  show :String = '';
  position : String ='';
  clickBtnAccor( i:number) {
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
