import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-tache',
  templateUrl: './page-tache.component.html',
  styleUrls: ['./page-tache.component.scss']
})
export class PageTacheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
isView : boolean[] = [false,false,false,false,false];
  titre: String  = '';
  show : String='';
  position : String ='';
  i : number = 0;
  clickImg(name: String, i:number) {
    this.isView.splice(i,i,true)
    this.isView.splice(i+1,i+1,false)
    this.show ='show'
    this.titre = name;
    this.position='position-opsolute';
    this.i= i;
  }
  clos(): void{
    this.show='';
    this.position ='';
    this.isView.splice(this.i,this.i,false)
    this.isView.splice(this.i+1,this.i+1,false)
  }
}
