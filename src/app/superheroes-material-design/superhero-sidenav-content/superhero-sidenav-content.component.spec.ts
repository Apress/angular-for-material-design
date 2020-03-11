import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroSidenavContentComponent } from './superhero-sidenav-content.component';

describe('SuperheroSidenavContentComponent', () => {
  let component: SuperheroSidenavContentComponent;
  let fixture: ComponentFixture<SuperheroSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
