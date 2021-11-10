import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingSessionComponent } from './add-training-session.component';

describe('AddTrainingSessionComponent', () => {
  let component: AddTrainingSessionComponent;
  let fixture: ComponentFixture<AddTrainingSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
