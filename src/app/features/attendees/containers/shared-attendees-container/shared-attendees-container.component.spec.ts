import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAttendeesContainerComponent } from './shared-attendees-container.component';
import { SharedModule } from '../../../../shared';
import { Participant } from '@core/models';
import { ParticipantInvitationState, ParticipantRole } from '@core/enums';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const attendees: Participant[] = [
  {
    email: 'laurent@bigsool.com',
    name: 'Laurent Wozniak',
    company: 'Bigsool',
    jobTitle: "Maitre d'oeuvre",
    projectId: 34567,
    role: ParticipantRole.OWNER,
    state: ParticipantInvitationState.ACTIVE,
  },
];

describe('SharedAttendeesContainerComponent', () => {
  let component: SharedAttendeesContainerComponent;
  let fixture: ComponentFixture<SharedAttendeesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, SharedModule],
      declarations: [SharedAttendeesContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAttendeesContainerComponent);
    component = fixture.componentInstance;
    component.attendees = attendees;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
