import {Component, Input, OnInit} from '@angular/core';
import {Menu} from "../../menu/menu";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {
  public menuProperties : Array<Menu> = [
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

    }
    ,
    {
      id : '5',
      icone: 'fas fa-users-cog',
      url : '',
      titre : ' Gestion d\'utilisateur',
      sousMenu : [
        {
          id : '31',
          icone: 'fas fa-users',
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
    }


  ];

  constructor(
    private router : Router ,
    private activatedRoute : ActivatedRoute

  ) {}
  @Input()
  role : boolean = false;
  valrole : String = '';
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.valrole = params['role'];
      if (this.valrole === 'admin') this.role = true;

    });
  }

  navigate(url?: String): void{
    this.router.navigate([url])
  }

}
