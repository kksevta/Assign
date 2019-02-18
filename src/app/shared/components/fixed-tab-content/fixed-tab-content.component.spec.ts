import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTabContentComponent } from './fixed-tab-content.component';

describe('FixedTabContentComponent', () => {
  let component: FixedTabContentComponent;
  let fixture: ComponentFixture<FixedTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
