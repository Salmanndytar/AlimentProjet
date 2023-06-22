import {Component, Input, OnInit, Output} from '@angular/core';
import {ListRepa} from "./listRepa";

@Component({
  selector: 'app-list-repas',
  templateUrl: './list-repas.component.html',
  styleUrls: ['./list-repas.component.scss']
})
export class ListRepasComponent implements OnInit {
@Input()
  lipid: number = 0;
  protein : number = 0;
  glucide : number = 0;

  calculQt(): void{
    console.log( );
   // this.lipid =lipide;


  }
  ListRepaPropertis: Array <ListRepa>=[
    {
     id :'1',
      nom : 'repas1',
      type :'diner',
      detailRepas:[
        {
          id:'11',
          nom:'aliment1',
          qt:50,
          glucide:2.5,
          lipide:3.0,
          proteine:36

        },
        {
          id:'12',
          nom:'aliment2',
          qt:500,
          glucide:14,
          lipide:32,
          proteine:0.9

        },
        {
          id:'13',
          nom:'aliment3',
          qt:25,
          glucide:25,
          lipide:12.2,
          proteine:3.6

        }
      ]
    },

   {
     id :'2',
     nom : 'repas2',
     type :'Petit dejener',

     detailRepas:[
       {
         id:'21',
         nom:'aliment1',
         qt:50,
         glucide:55,
         lipide:38,
         proteine:26,

       },
       {
         id:'22',
         nom:'aliment2',
         qt:50,
         glucide:25,
         lipide:18,
         proteine:0.6,

       },
       {
         id:'23',
         nom:'aliment3',
         qt:1000,
         glucide:0.0,
         lipide:0.8,
         proteine:66,

       }, {
         id:'24',
         nom:'aliment4',
         qt:50,
         glucide:45,
         lipide:3.8,
         proteine:2.2,

       }
     ]
   },
   {
     id :'3',
     nom : 'repas3',
    type :'Dejener',
     detailRepas:[
       {
         id:'31',
         nom:'aliment1',
         qt:500,
         glucide:12,
         lipide:6.6,
         proteine:25.9,

       },
       {
         id:'32',
         nom:'aliment2',
         qt:500,
         glucide:5.3,
         lipide:3.8,
         proteine:26,

       }
     ]
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
