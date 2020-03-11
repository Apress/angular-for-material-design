import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSampleComponent } from './tab-sample.component';

describe('TabSampleComponent', () => {
  let component: TabSampleComponent;
  let fixture: ComponentFixture<TabSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
