import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtAlimentComponent } from './qt-aliment.component';

describe('QtAlimentComponent', () => {
  let component: QtAlimentComponent;
  let fixture: ComponentFixture<QtAlimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtAlimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
