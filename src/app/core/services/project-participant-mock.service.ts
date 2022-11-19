import { Injectable } from '@angular/core';
import { ParticipantInvitationState, ParticipantRole } from '@core/enums';
import { AuthToken, Participant } from '@core/models';
import { _mockAuthToken, mockSendResult } from '@core/services/utils';

@Injectable({
  providedIn: 'root',
})
export class ProjectParticipantService {
  getParticipants(
    authToken: AuthToken,
    projectId: number
  ): Promise<Participant[]> {
    if (authToken !== _mockAuthToken) {
      return Promise.reject(new Error());
    }
    return mockSendResult(
      this._participantsMockStorage.filter(
        participant => participant.projectId === projectId
      )
    );
  }

  async addParticipant(
    authToken: AuthToken,
    projectId: number,
    email: string,
    name: string,
    company: string,
    jobTitle: string,
    role: ParticipantRole
  ): Promise<Participant> {
    if (authToken.auth !== _mockAuthToken.auth) {
      throw new Error('Token is not valid');
    }
    const participant: Participant = {
      email: email,
      name: name,
      company: company,
      jobTitle: jobTitle,
      projectId: parseInt(`${projectId}`, 10),
      role: role,
      state: ParticipantInvitationState.PENDING,
    };

    this._participantsMockStorage.push(participant);
    return await mockSendResult(participant);
  }

  private _participantsMockStorage: Participant[] = [
    {
      email: 'laurent@bigsool.com',
      name: 'Laurent Wozniak',
      company: 'Bigsool',
      jobTitle: "Maitre d'oeuvre",
      projectId: 34567,
      role: ParticipantRole.OWNER,
      state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'florian@bigsool.com',
      name: 'Florian Girardey',
      company: 'Bigsool',
      jobTitle: "Maitre d'oeuvre",
      projectId: 34567,
      role: ParticipantRole.COLLABORATOR,
      state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'thomas@bigsool.com',
      name: 'Thomas Dubois',
      company: 'Bigsool',
      jobTitle: "Maitre d'oeuvre",
      projectId: 34567,
      role: ParticipantRole.COLLABORATOR,
      state: ParticipantInvitationState.PENDING,
    },
    {
      email: 'mic@mac.com',
      name: 'Mic Fast',
      company: 'Électricité Fast',
      jobTitle: 'Électricité',
      projectId: 34567,
      role: ParticipantRole.WORKPACKAGE,
      state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'rick@gallant.com',
      name: 'Eric Gallant',
      company: 'Peinture Gallant',
      jobTitle: 'Peinture',
      projectId: 34567,
      role: ParticipantRole.WORKPACKAGE,
      state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'gg@gg-plomberie.com',
      name: 'Guillaume Gonzales',
      company: 'Gonzales peinture',
      jobTitle: 'Plomberie',
      projectId: 34567,
      role: ParticipantRole.WORKPACKAGE,
      state: ParticipantInvitationState.ACTIVE,
    },
    {
      email: 'info@cesar-btp.com',
      name: 'JF Cesar',
      company: 'Cesar BTP',
      jobTitle: 'Terrassement',
      projectId: 34567,
      role: ParticipantRole.WORKPACKAGE,
      state: ParticipantInvitationState.PENDING,
    },
  ];
}
