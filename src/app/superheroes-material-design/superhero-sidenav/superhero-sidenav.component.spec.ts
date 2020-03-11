import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroSidenavComponent } from './superhero-sidenav.component';

describe('SuperheroSidenavComponent', () => {
  let component: SuperheroSidenavComponent;
  let fixture: ComponentFixture<SuperheroSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
