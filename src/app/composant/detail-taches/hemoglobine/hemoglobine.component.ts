import { Component, OnInit } from '@angular/core';
import {label} from "../../label/label";

@Component({
  selector: 'app-hemoglobine',
  templateUrl: './hemoglobine.component.html',
  styleUrls: ['./hemoglobine.component.scss']
})
export class HemoglobineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVisible : boolean[] = label.val;
  mouseout(i:number):void{
    label.mousseout(i)
  }
  moussenter(j:number):void{
    label.moussenter(j)
  }
}
