import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {label} from "../label/label";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//message sur voler
  val : boolean[] =  label.val;
  mousseout(i:number){
    label.mousseout(i);
  }
  moussenter(j:number){
    label.moussenter(j);
  }
  @Output()
  onclick = new EventEmitter;
  boutOnclick():void{
    this.onclick.emit();
  }
  constructor(private  router: Router) { }

  ngOnInit(): void {
  }
  profil():void{
    this.router.navigate(['profil'])
  }
}
