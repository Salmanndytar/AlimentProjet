import { Component, OnInit } from '@angular/core';
import {Journal} from "./journal";


@Component({
  selector: 'app-detail-journal',
  templateUrl: './detail-journal.component.html',
  styleUrls: ['./detail-journal.component.scss']
})
export class DetailJournalComponent implements OnInit {

  public jouranlProperties : Array<Journal> = [
    {
      id : '1',
      icone: 'bi bi-droplet-half color-red',
      url : '',
      titre : 'Glycemie',
      sousMenu : [
        {
          id : '12',
          date: '22/02/2023',
          val1 : '1.8 mg/l',
          periode: 'avant repas'
        },
        {
          id : '12',
          date: '22/02/2023',
          val1 : '2.7 mg/l',
          periode: 'apres repas'
        }
      ]

    },

    {
      id : '2',
      icone: 'bi bi-egg-fried color-vert',
      url : '',
      titre : 'Repas comsommé',
      sousMenu : [
        {
          id : '21',
          val1 :'petit dejener :  pain au cohocola, 1 verre du lait ',
          date: '23/02/2023',
          periode: '--------'
        },
        {
          id : '22',
          val1:' dejener :  hamburfer 1kg, jus citron 75 ml ',
          date: '23/02/2023',
          periode: '--------'
        }
      ],

    },
    {
      id : '3',
      icone: 'bi bi-capsule-pill color-grise',
      url : '',
      titre : ' Medicament pris',
      sousMenu : [
        {
          id : '31',
          val1 : 'chensmol 25mg',
          periode: 'apres repas',
          date: '23/02/2023'
        },
        {
          id : '31',
          val1 : 'diabetoline 500mg',
          periode: 'apres repas',
          date: '23/02/2023'
        }
      ],

    },

    {
      id : '4',
    icone: 'fas fa-dumbbell  color-orange  ',
    url : '',
    titre : 'Poids',
    sousMenu : [
    {
      id : '42',
      date: '22/02/2023',
      val1 : '90 kg',
      periode: 'avant repas'
    },
    {
      id : '42',
      date: '13/05/2023',
      val1 : '82 kg',
      periode: 'apres repas'
    }
  ]

  },
    {  id : '5',
  icone: 'fas fa-walking color-brune',
  url : '',
  titre : 'Exercice physique',
  sousMenu : [
    {
      id : '52',
      date: '22/02/2023',
      val1 : '33 mn',
      periode: 'avant repas'
    },
    {
      id : '52',
      date: '13/05/2023',
      val1 : '45 mn',
      periode: 'avant repas'
    }
  ]

}


  ];
  constructor(

  ) { }

  ngOnInit(): void {

  }

}
