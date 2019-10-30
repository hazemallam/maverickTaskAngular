import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondmainComponent } from './secondmain.component';

describe('SecondmainComponent', () => {
  let component: SecondmainComponent;
  let fixture: ComponentFixture<SecondmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
