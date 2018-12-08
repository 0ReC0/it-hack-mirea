import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrModuleComponent } from './vr-module.component';

describe('VrModuleComponent', () => {
  let component: VrModuleComponent;
  let fixture: ComponentFixture<VrModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
