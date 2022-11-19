import { TestBed } from '@angular/core/testing';

import { AttendeesService } from './attendees.service';
import { _mockAuthToken } from '@core/services/utils';
import { Participant } from '@core/models';
import { take } from 'rxjs';
import { ProjectParticipantService } from '@core/services';
import { ParticipantInvitationState, ParticipantRole } from '@core/enums';

const participants: Participant[] = [
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

const participantPartial: Participant = {
  email: 'laurent@bigsool.com',
  name: 'Laurent Wozniak',
  company: 'Bigsool',
  jobTitle: "Maitre d'oeuvre",
  projectId: 34567,
  role: ParticipantRole.OWNER,
  state: ParticipantInvitationState.ACTIVE,
};

describe('AttendeesService', () => {
  let service: AttendeesService;
  let serviceWithPromise: ProjectParticipantService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
    });
    service = TestBed.inject(AttendeesService);
    serviceWithPromise = TestBed.inject(ProjectParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns the participants', done => {
    let count = 0;
    let actualParticipants: Participant[] = [];
    spy = spyOn(serviceWithPromise, 'getParticipants').and.returnValues(
      Promise.resolve(participants)
    );

    const participants$ = service.getParticipants('', _mockAuthToken, 34567);
    participants$.pipe(take(1)).subscribe({
      next: value => {
        count = value.length;
        actualParticipants = [...actualParticipants, ...value];
      },
      complete: () => {
        expect(actualParticipants.length).toEqual(count);
        done();
      },
    });

    expect(serviceWithPromise.getParticipants).toHaveBeenCalled();
  });

  it('should be add a participant', done => {
    let actualParticipant: Participant | null = null;
    spy = spyOn(serviceWithPromise, 'addParticipant').and.returnValues(
      Promise.resolve(participantPartial)
    );

    const participantAdded$ = service.addParticipant(_mockAuthToken, {
      email: participants[0]['email'],
      name: participants[0]['name'],
      company: participants[0]['company'],
      jobTitle: participants[0]['jobTitle'],
      projectId: participants[0]['projectId'],
      role: participants[0]['role'],
    });

    participantAdded$.pipe(take(1)).subscribe({
      next: value => {
        actualParticipant = { ...actualParticipant, ...value };
      },
      complete: () => {
        expect(actualParticipant).toEqual(participantPartial);
        done();
      },
    });

    expect(serviceWithPromise.addParticipant).toHaveBeenCalled();
  });
});
