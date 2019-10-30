import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Livepreview2Component } from './livepreview2.component';

describe('Livepreview2Component', () => {
  let component: Livepreview2Component;
  let fixture: ComponentFixture<Livepreview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Livepreview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Livepreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
