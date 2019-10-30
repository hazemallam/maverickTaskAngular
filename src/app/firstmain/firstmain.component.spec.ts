import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstmainComponent } from './firstmain.component';

describe('FirstmainComponent', () => {
  let component: FirstmainComponent;
  let fixture: ComponentFixture<FirstmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
