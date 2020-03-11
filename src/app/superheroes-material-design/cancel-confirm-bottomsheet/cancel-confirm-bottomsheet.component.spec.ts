import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelConfirmBottomsheetComponent } from './cancel-confirm-bottomsheet.component';

describe('CancelConfirmBottomsheetComponent', () => {
  let component: CancelConfirmBottomsheetComponent;
  let fixture: ComponentFixture<CancelConfirmBottomsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelConfirmBottomsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelConfirmBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
