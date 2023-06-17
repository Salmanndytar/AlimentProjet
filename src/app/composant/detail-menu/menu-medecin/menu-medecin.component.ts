import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Menu} from "../../menu/menu";

@Component({
  selector: 'app-menu-medecin',
  templateUrl: './menu-medecin.component.html',
  styleUrls: ['./menu-medecin.component.scss']
})
export class MenuMedecinComponent implements OnInit {
  public menuProperties : Array<Menu> = [
    {
      id : '5',
      icone: 'fas fa-users-cog',
      url : 'nouvau-patient',
      titre : ' Suivi d\'un nouveau patient',
      sousMenu : [
        {
          id : '31',
          icone: 'fas fa-id-card-alt',
          url : 'nouvau-patient',
          titre : 'Nouvau patient(e)'
        }
      ]
    },
    {
      id : '6',
      icone: 'fas fa-users',
      url : 'patient',
      titre : 'Mes patiens',
      sousMenu : [
        {
          id : '41',
          icone: 'fas fa-fill">',
          url : 'patient',
          titre : 'Liste patient '
        }
      ]

    }


  ];


  constructor(
    private router :Router ,
    private activatedRoute : ActivatedRoute) { }

  @Input()
  role : boolean = false;
  valrole : String = '';
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.valrole = params['role'];
      if (this.valrole === 'medecin') this.role = true;

    });
  }

  navigate(url?: String): void{
    this.router.navigate([url])
  }


}
