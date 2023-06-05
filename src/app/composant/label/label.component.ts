import {Component, Input, OnInit} from '@angular/core';
import {sms} from "../bouton-action/bouton-action.component";

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})

export class LabelComponent implements OnInit {



  @Input()
  isVisible: boolean = false;
 @Input()
  msg : String = 'mesaage';
  constructor() { }

  ngOnInit(): void {
  }

}
