import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantModalContainerComponent } from './participant-modal-container.component';
import { DialogService } from '../../../dialog/services';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

describe('ParticipantModalContainerComponent', () => {
  let component: ParticipantModalContainerComponent;
  let fixture: ComponentFixture<ParticipantModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
      declarations: [ParticipantModalContainerComponent],
      providers: [
        {
          provide: DialogService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
