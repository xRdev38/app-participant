import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';
import { MatDialogRef } from '@angular/material/dialog';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DialogService, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
