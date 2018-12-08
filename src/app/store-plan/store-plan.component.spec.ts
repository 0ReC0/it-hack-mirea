import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePlanComponent } from './store-plan.component';

describe('StorePlanComponent', () => {
  let component: StorePlanComponent;
  let fixture: ComponentFixture<StorePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
