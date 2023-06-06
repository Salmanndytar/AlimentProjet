import { Component, OnInit } from '@angular/core';
import {label} from '../../label/label';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.scss']
})
export class PoidsComponent implements OnInit {

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
