import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosommerComponent } from './cosommer.component';

describe('CosommerComponent', () => {
  let component: CosommerComponent;
  let fixture: ComponentFixture<CosommerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosommerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosommerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
