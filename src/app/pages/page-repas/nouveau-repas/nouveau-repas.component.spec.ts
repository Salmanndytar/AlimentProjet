import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauRepasComponent } from './nouveau-repas.component';

describe('NouveauRepasComponent', () => {
  let component: NouveauRepasComponent;
  let fixture: ComponentFixture<NouveauRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
