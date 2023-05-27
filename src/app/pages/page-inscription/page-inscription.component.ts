import { Component, OnInit } from '@angular/core';
import {Menu} from "../../composant/menu/menu";
import {Incription} from "./incription";

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {
 public hide? :String;


  public nHid(): void {

    this.hide= 'ff'
  };
  constructor( ) {this.nHid()  }

  ngOnInit(): void {

  }
  public optionHid(): void {

    this.hide= 'enabled'
  };
}
