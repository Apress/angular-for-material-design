import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesExpandableListComponent } from './superheroes-expandable-list.component';

describe('SuperheroesExpandableListComponent', () => {
  let component: SuperheroesExpandableListComponent;
  let fixture: ComponentFixture<SuperheroesExpandableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroesExpandableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesExpandableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
