import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(
    private router : Router ,
    private activatedRoute : ActivatedRoute

  ) {}

  ngOnInit(): void {

  }


}
