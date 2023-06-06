import { Component, OnInit } from '@angular/core';
import {label} from "../../label/label";

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent implements OnInit {

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
