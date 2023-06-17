import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  constructor(
     private   router : Router
  ) {

  }

  ngOnInit(): void {

  }
  loginok(){

    this.router.navigate([''],{queryParams:{role:'admin'}});
  }

}
