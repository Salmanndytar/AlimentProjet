import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieComponent } from './glycemie.component';

describe('GlycemieComponent', () => {
  let component: GlycemieComponent;
  let fixture: ComponentFixture<GlycemieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlycemieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlycemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
