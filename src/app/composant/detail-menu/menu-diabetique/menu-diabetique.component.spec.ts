import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiabetiqueComponent } from './menu-diabetique.component';

describe('MenuDiabetiqueComponent', () => {
  let component: MenuDiabetiqueComponent;
  let fixture: ComponentFixture<MenuDiabetiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDiabetiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDiabetiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
