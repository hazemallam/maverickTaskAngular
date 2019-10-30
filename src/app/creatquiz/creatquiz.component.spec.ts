import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatquizComponent } from './creatquiz.component';

describe('CreatquizComponent', () => {
  let component: CreatquizComponent;
  let fixture: ComponentFixture<CreatquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
