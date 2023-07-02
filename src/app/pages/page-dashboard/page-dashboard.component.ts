import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../../composant/header/header.component";

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {
  menu:String[]= ['col-md-1','hidden','col-md-11']
  dimMenu():void{
    if (this.menu[0]=='col-md-1'){
      this.menu.splice(0,0,'col-md-3')
      this.menu.splice(1,1,'')
      this.menu.splice(2,2,'col-md-9')

    }else {
      this.menu.splice(0,0,'col-md-1')
      this.menu.splice(1,1,'hidden')
      this.menu.splice(2,2,'col-md-11')

    }
}

  constructor() { }

  ngOnInit(): void {
  }

}
