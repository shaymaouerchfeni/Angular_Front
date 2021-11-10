import { TestBed } from '@angular/core/testing';

import { TrainingSessionService } from './training-session.service';

describe('TrainingSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingSessionService = TestBed.get(TrainingSessionService);
    expect(service).toBeTruthy();
  });
});
