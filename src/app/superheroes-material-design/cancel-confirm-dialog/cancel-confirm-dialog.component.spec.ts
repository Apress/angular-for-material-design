import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelConfirmDialogComponent } from './cancel-confirm-dialog.component';

describe('CancelConfirmDialogComponent', () => {
  let component: CancelConfirmDialogComponent;
  let fixture: ComponentFixture<CancelConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
