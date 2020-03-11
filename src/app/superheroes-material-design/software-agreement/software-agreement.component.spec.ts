import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareAgreementComponent } from './software-agreement.component';

describe('SoftwareAgreementComponent', () => {
  let component: SoftwareAgreementComponent;
  let fixture: ComponentFixture<SoftwareAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
