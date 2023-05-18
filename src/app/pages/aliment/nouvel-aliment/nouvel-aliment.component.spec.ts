import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelAlimentComponent } from './nouvel-aliment.component';

describe('NouvelAlimentComponent', () => {
  let component: NouvelAlimentComponent;
  let fixture: ComponentFixture<NouvelAlimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelAlimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
