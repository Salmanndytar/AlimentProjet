import { Component, OnInit } from '@angular/core';
import {Menu} from "../../composant/menu/menu";
import {Incription} from "./incription";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {
public  rol: String[]=['noshow']
  public  show: String[]=['']
  public tab: String[] = ['','hidden','hidden','hidden','hidden']//par defaut index 0 sont tous affiches; l'index 1 et 2 sont sont tous fermes

  optionRoleMed(): void{
    this.rol.splice(0,0,'show')

  };
  optionRoleSimp(): void{
    this.rol.splice(0,0,'noshow')

  };

  constructor(
    private router : Router
  ) {  }

  ngOnInit(): void {

  }
  public hidOne(): void {//Fermees les premire partie et ouvrie la deuxime partie
  this.tab.splice(0,0,'hidden')
    this.tab.splice(1,1,'')

  };
  public hidTwo(): void {//Ouvrir uniquement 3eme partie sans fermer la 2eme
  if (this.rol[0]=='noshow'){
    this.tab.splice(1,1,'hidden')
    this.tab.splice(2,2,'')
    this.tab.splice(3,3,'')
  }else {
    this.tab.splice(1,1,'hidden')
    this.show.splice(0,0,'show')
  }

  };


  public allHid(): void {//fermer toute les partie
    this.tab.splice(0,0,'hidden')
    this.tab.splice(2,2,'hidenn')
    this.tab.splice(1,1,'hidden')
    this.tab.splice(3,3,'hidden')

  };
  code(): void{
    this.hidTwo()
    this.router.navigate([''])
  }

}
