import { Component, OnInit } from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuProperties : Array<Menu> = [
    {
    id : '1',
    icone: 'bi bi-graph-up-arrow',
    url : '',
    titre : 'Tableau de board',
    sousMenu : [
      {
        id : '12',
        icone: 'bi bi-pie-chart',
        url : '',
        titre : 'vu ensemble'
      },
      {
        id : '12',
        icone: 'bi bi-bar-chart',
        url : 'statistic',
        titre : 'Statistic'
      }
    ],

},

    {
      id : '2',
      icone: 'bi bi-egg-fried',
      url : '',
      titre : ' Gestion d\'aliment',
      sousMenu : [
        {
          id : '21',
          icone: 'bi bi-bookmark',
          url : '',
          titre : 'categories'
        },
        {
          id : '22',
          icone: 'bi bi-egg',
          url : 'aliments',
          titre : 'aliments'
        }
      ],

    },
    {
      id : '3',
      icone: 'bi bi-people',
      url : '',
      titre : ' Gestion d\'utilisateur',
      sousMenu : [
        {
          id : '31',
          icone: 'bi bi-node-plus',
          url : '',
          titre : 'diabetique'
        },
        {
          id : '32',
          icone: 'bi bi-node-minus',
          url : '',
          titre : 'non-diabetique'
        },
        {
          id : '33',
          icone: 'bi bi-prescription2',
          url : '',
          titre : 'medecin'
        },
        {
          id : '34',
          icone: 'bi bi-person-check',
          url : '',
          titre : 'admin'
        }
      ],

    }

];

  constructor(
    private router : Router
  ) {}

  ngOnInit(): void {
  }

  navigate(url?: String): void{
  this.router.navigate([url])
  }
}
