import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsBottomsheetComponent } from './actions-bottomsheet.component';

describe('ActionsBottomsheetComponent', () => {
  let component: ActionsBottomsheetComponent;
  let fixture: ComponentFixture<ActionsBottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsBottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
