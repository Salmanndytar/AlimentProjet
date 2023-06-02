import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-aliment',
  templateUrl: './detail-aliment.component.html',
  styleUrls: ['./detail-aliment.component.scss']
})
export class DetailAlimentComponent implements OnInit {
  @Input()
  isUpdatValid = true
  @Input()
  isDeleteValide = true
  @Input()
  isDatailValide = true
  @Input()
  isEatValide =true

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  nouvelAliment():void{
    this.router.navigate(['nouveauRepas'])
  }
}
