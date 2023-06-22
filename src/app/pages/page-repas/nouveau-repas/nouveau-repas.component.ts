import { Component, OnInit } from '@angular/core';
import {compositionRepas} from "./compositionRepas";


@Component({
  selector: 'app-nouveau-repas',
  templateUrl: './nouveau-repas.component.html',
  styleUrls: ['./nouveau-repas.component.scss']
})
export class NouveauRepasComponent implements OnInit {

  isShow : String[] = ['',''];
  isPositionApsolite : String[ ]= ['',''];
  optionOne():void{
    if (this.isShow[0]==''){
      this.isShow.splice(1,1,'')
      this.isPositionApsolite.splice(1,1,'')
      this.isShow.splice(0,0,'show')
      this.isPositionApsolite.splice(0,0,'position-opsolute')
    }


  }
  optionTwo():void{
    if (this.isShow[1]==''){
      this.isShow.splice(0,0,'')
      this.isPositionApsolite.splice(0,0,'')
      this.isShow.splice(1,1,'show')
      this.isPositionApsolite.splice(1,1,'position-opsolute')
    }

  }
  clos(): void{
    this.isShow.splice(0,0,'')
    this.isPositionApsolite.splice(0,0,'')
    this.isShow.splice(1,1,'')
    this.isPositionApsolite.splice(1,1,'')
  }




  public  comprepas : Array<compositionRepas> = [
    {
      id : '1',
      nom : 'Oeuf cuit',
      qt :'100g'
    },
    {
      id : '2',
      nom : 'Oignon',
      qt :'50g'
    },
    {
      id : '3',
      nom : 'Pain',
      qt :'1000g'
    },


  ];
  public clicImg(): void{

  }

  constructor() { }

  ngOnInit(): void {
  }


}
