import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Menu} from "../../menu/menu";

@Component({
  selector: 'app-menu-autre',
  templateUrl: './menu-autre.component.html',
  styleUrls: ['./menu-autre.component.scss']
})
export class MenuAutreComponent implements OnInit {
  public menuProperties : Array<Menu> = [
    {
      id : '1',
      icone: 'fas fa-chart-line',
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
      icone: 'fas fa-utensils',
      url : 'repas',
      titre : 'Mes repas',
      sousMenu : [
        {
          id : '21',
          icone: 'bi bi-bookmark',
          url : 'nouveauRepas',
          titre : 'Nouveau repas'
        },
        {
          id : '22',
          icone: 'fas fa-list-alt',
          url : 'repas',
          titre : 'mes repas'
        }
      ],
    },
    {
      id : '4',
      icone: 'fas fa-utensils',
      url : 'consommer',
      titre : 'Enregistrer une consommation',
      sousMenu : [
        {
          id : '21',
          icone: 'bi bi-bookmark',
          url : 'consommer',
          titre : 'Nouvelle consommation'
        }

      ],

    }, {
      id : '7',
      icone: 'fas fa-check-square',
      url : '',
      titre : 'Gestion de palannig',
      sousMenu : [
        {
          id : '41',
          icone: 'fa-regular fa-heart">',
          url : '',
          titre : 'creer mon planning'
        },{
          id : '41',
          icone: 'fa-regular fa-heart">',
          url : '',
          titre : 'voire planning'
        }
      ]

    }


  ];

  constructor(
    private router :Router ,
    private activatedRoute : ActivatedRoute) { }

  @Input()
  role : boolean = false;
  valrole? : String | null;
  ngOnInit(): void {
      this.valrole = localStorage.getItem('roles')
      if (this.valrole?.includes('non-diabetique')) this.role = true;
  }


  navigate(url?: String): void{
    this.router.navigate([url])
  }

}
