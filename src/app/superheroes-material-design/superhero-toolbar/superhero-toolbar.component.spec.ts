import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroToolbarComponent } from './superhero-toolbar.component';

describe('SuperheroToolbarComponent', () => {
  let component: SuperheroToolbarComponent;
  let fixture: ComponentFixture<SuperheroToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
