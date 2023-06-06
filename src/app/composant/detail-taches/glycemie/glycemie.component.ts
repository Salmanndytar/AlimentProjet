import { Component, OnInit } from '@angular/core';
import {label} from "../../label/label";

@Component({
  selector: 'app-glycemie',
  templateUrl: './glycemie.component.html',
  styleUrls: ['./glycemie.component.scss']
})
export class GlycemieComponent implements OnInit {

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
