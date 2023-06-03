import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  isLabelView: String[] = ['hidden'];
 @Input()
  msg : String = 'mesaage';
  constructor() { }

  ngOnInit(): void {
  }
  labeView() {
    this.isLabelView.splice(0,0,'');
  }

  labelHid() {
    this.isLabelView.splice(0,0,'hidden');
  }
}
