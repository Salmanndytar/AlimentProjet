import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Journal} from "../../composant/detail-journal/journal";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Output()
  onclick = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  butSuiciOnclick():void{
    this.onclick.emit();
  }
}
