import { ParticipantInvitationState, ParticipantRole } from '@core/enums';

export interface Participant {
  email: string;
  name: string;
  company: string;
  jobTitle: string;
  projectId: number;
  role: ParticipantRole;
  state: ParticipantInvitationState;
}

export type ParticipantOptions = Omit<Participant, 'state'>;
