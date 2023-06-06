import { Component, OnInit } from '@angular/core';
import {label} from "../../label/label";

@Component({
  selector: 'app-tension',
  templateUrl: './tension.component.html',
  styleUrls: ['./tension.component.scss']
})
export class TensionComponent implements OnInit {

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
