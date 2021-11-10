import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainingSessionsComponent } from './list-training-sessions.component';

describe('ListTrainingSessionsComponent', () => {
  let component: ListTrainingSessionsComponent;
  let fixture: ComponentFixture<ListTrainingSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTrainingSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainingSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
