import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrls: ['./bouton-action.component.scss']
})
export class BoutonActionComponent implements OnInit {

  @Output()
  onclick = new EventEmitter;
  @Input()
  isNouveauVisible: boolean = true;
  @Input()
  isAploadVisible: boolean = true;
  @Input()
  isDownloadVisible = true;

  constructor() { }

  ngOnInit(): void {
  }
  boutOnclick():void{
    this.onclick.emit();
  }
}
