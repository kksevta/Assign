import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTabComponent } from './fixed-tab.component';

describe('FixedTabComponent', () => {
  let component: FixedTabComponent;
  let fixture: ComponentFixture<FixedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
