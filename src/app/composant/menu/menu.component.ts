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
      },
      {
        id : '12',
        icone: '<i class=bi bi-journal-bookmark',
        url : 'journal',
        titre : 'Journal'
      }
    ],

},

    {
      id : '2',
      icone: 'fas fa-utensils',
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
          icone: 'fas fa-list-alt',
          url : 'aliments',
          titre : 'list aliments'
        },
        {
          id : '23',
          icone: 'fas fa-hamburger',
          url : 'nouvelaliment',
          titre : 'nouvel aliments'
        }
      ],

    },
    {
      id : '3',
      icone: 'fas fa-users-cog',
      url : '',
      titre : ' Gestion d\'utilisateur',
      sousMenu : [
        {
          id : '31',
          icone: 'bi bi-people',
          url : 'users',
          titre : 'Utilisateurs'
        },
        {
          id : '32',
          icone: 'fas fa-id-card-alt',
          url : '',
          titre : 'Role(type user)'
        },
      ]
    },
    {
      id : '4',
      icone: 'fas fa-check-square',
      url : '',
      titre : ' font awsome',
      sousMenu : [
        {
          id : '41',
          icone: 'fa-regular fa-heart">',
          url : '',
          titre : 'diabetique'
        },
        {
          id : '42',
          icone: 'bi bi-node-minus',
          url : '',
          titre : 'non-diabetique'
        },
        {
          id : '43',
          icone: 'bi bi-prescription2',
          url : '',
          titre : 'medecin'
        },
        {
          id : '44',
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
