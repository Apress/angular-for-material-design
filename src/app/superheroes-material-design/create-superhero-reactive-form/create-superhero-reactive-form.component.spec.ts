import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuperheroReactiveFormComponent } from './create-superhero-reactive-form.component';

describe('CreateSuperheroReactiveFormComponent', () => {
  let component: CreateSuperheroReactiveFormComponent;
  let fixture: ComponentFixture<CreateSuperheroReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSuperheroReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSuperheroReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
