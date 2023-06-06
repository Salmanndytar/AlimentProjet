import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemoglobineComponent } from './hemoglobine.component';

describe('HemoglobineComponent', () => {
  let component: HemoglobineComponent;
  let fixture: ComponentFixture<HemoglobineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemoglobineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HemoglobineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
