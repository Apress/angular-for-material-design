import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroProfileFooterComponent } from './superhero-profile-footer.component';

describe('SuperheroProfileFooterComponent', () => {
  let component: SuperheroProfileFooterComponent;
  let fixture: ComponentFixture<SuperheroProfileFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroProfileFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroProfileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
