import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTacheComponent } from './page-tache.component';

describe('PageTacheComponent', () => {
  let component: PageTacheComponent;
  let fixture: ComponentFixture<PageTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
