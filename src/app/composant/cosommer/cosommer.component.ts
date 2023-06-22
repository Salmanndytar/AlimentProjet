import {Component, Input, OnInit} from '@angular/core';
//import {label} from "../../composant/label/label";
import {label} from "../label/label";

@Component({
  selector: 'app-cosommer',
  templateUrl: './cosommer.component.html',
  styleUrls: ['./cosommer.component.scss']
})
export class CosommerComponent implements OnInit {
isShow : String[] = ['',''];
isPositionApsolite : String[ ]= ['',''];
//message sur voler
 val : boolean[] =  label.val;
  mousseout(i:number){
    label.mousseout(i);
  }
  moussenter(j:number){
    label.moussenter(j);
  }

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
  constructor() { }

  ngOnInit(): void {
  }


}
