import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabContentComponent } from './dynamic-tab-content.component';

describe('DynamicTabContentComponent', () => {
  let component: DynamicTabContentComponent;
  let fixture: ComponentFixture<DynamicTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
