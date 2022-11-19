import { TestBed } from '@angular/core/testing';

import { DialogFactoryService } from './dialog-factory.service';
import { DialogService } from './dialog.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('DialogFactoryService', () => {
  let service: DialogFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        {
          provide: DialogService,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(DialogFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
