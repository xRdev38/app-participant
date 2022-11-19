import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeesContainerComponent } from './attendees-container.component';
import { Participant } from '@core/models';
import { ParticipantInvitationState, ParticipantRole } from '@core/enums';
import { SharedModule } from '../../../../shared';

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

describe('AttendeesContainerComponent', () => {
  let component: AttendeesContainerComponent;
  let fixture: ComponentFixture<AttendeesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [AttendeesContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeesContainerComponent);
    component = fixture.componentInstance;
    component.attendees = attendees;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
