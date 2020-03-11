import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroNewListComponent } from './superhero-new-list.component';

describe('SuperheroNewListComponent', () => {
  let component: SuperheroNewListComponent;
  let fixture: ComponentFixture<SuperheroNewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroNewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
