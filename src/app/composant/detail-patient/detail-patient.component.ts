import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {label} from "../label/label";

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.scss']
})
export class DetailPatientComponent implements OnInit {
  @Output()
  suiviclick = new EventEmitter;
  @Output()
  jounalclick = new EventEmitter;

  @Output()
  deleteclick = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  val : boolean[] =  label.val;
  mousseout(i:number){
    label.mousseout(i);
  }
  moussenter(j:number){
    label.moussenter(j);
  }
  butSuiciOnclick():void{
    this.suiviclick.emit();
  } butJourciOnclick():void{
    this.jounalclick.emit();
  }
  butDelciOnclick():void{
    this.deleteclick.emit();
  }
}
