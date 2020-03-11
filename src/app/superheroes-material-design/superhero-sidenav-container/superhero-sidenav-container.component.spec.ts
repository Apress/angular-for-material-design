import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroSidenavContainerComponent } from './superhero-sidenav-container.component';

describe('SuperheroSidenavContainerComponent', () => {
  let component: SuperheroSidenavContainerComponent;
  let fixture: ComponentFixture<SuperheroSidenavContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroSidenavContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroSidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
