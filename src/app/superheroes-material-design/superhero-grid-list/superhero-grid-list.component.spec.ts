import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroGridListComponent } from './superhero-grid-list.component';

describe('SuperheroGridListComponent', () => {
  let component: SuperheroGridListComponent;
  let fixture: ComponentFixture<SuperheroGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
