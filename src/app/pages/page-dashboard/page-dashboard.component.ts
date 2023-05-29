import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {
  menu:String[]= ['col-md-1','hidden','col-md-11']
 head: String[] = [' min-height-60','shadow-sm']
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
  dimHid():void {
    if (this.head[0]=='min-height-60'){
     // this.head.splice(0,0,'min-height-120')
     // this.head.splice(1,1,'shadow-sm')

    }

    else{
     // this.head.splice(0,0,'min-height-60')
     //this.head.splice(1,1,'shadow-lg')
       }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
