import { Participant } from './participant.model';
import { faker } from '@faker-js/faker';
import { ParticipantInvitationState, ParticipantRole } from '@core/enums';

describe('Participant model', () => {
  let email: string;
  let name: string;
  let company: string;
  let jobTitle: string;
  let projectId: number;
  let role: ParticipantRole;
  let state: ParticipantInvitationState;

  beforeEach(() => {
    email = faker.internet.email();
    name = faker.name.fullName();
    company = faker.company.name();
    jobTitle = faker.name.jobTitle();
    projectId = faker.datatype.number();
    role = ParticipantRole.COLLABORATOR;
    state = ParticipantInvitationState.ACTIVE;
  });

  it('has a valid model', () => {
    let participant: Participant = {
      email,
      name,
      company,
      jobTitle,
      projectId,
      role,
      state,
    };

    expect(participant.email).toEqual(email);
    expect(participant.name).toEqual(name);
    expect(participant.company).toEqual(company);
    expect(participant.jobTitle).toEqual(jobTitle);
    expect(participant.projectId).toEqual(projectId);
    expect(participant.role).toEqual(role);
    expect(participant.state).toEqual(state);
  });
});
