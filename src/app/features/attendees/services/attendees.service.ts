import { Injectable } from '@angular/core';
import { ProjectParticipantService } from '@core/services';
import { AuthToken, Participant, ParticipantOptions } from '@core/models';
import { distinctUntilChanged, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendeesService {
  constructor(private readonly participantService: ProjectParticipantService) {}

  getParticipants(
    login: string,
    authToken: AuthToken,
    projectId: number
  ): Observable<Participant[]> {
    return new Observable(observer => {
      this.participantService
        .getParticipants(authToken, projectId)
        .then((participants: Participant[]) => {
          let ownerCompany: Participant | undefined;
          let participantsCompany: Participant[] = participants;
          if (!!login) {
            ownerCompany = this.getOwnerByEmail(login, participants);

            participantsCompany = participants.filter(
              participant => ownerCompany?.email !== participant.email
            );
          }
          observer.next(participantsCompany);
          observer.complete();
        })
        .catch((err: Error) => observer.error(err))
        .finally(() => observer.complete());
    });
  }

  addParticipant(
    authToken: AuthToken,
    participant: ParticipantOptions
  ): Observable<Participant> {
    return new Observable(observer => {
      this.participantService
        .addParticipant(
          authToken,
          participant.projectId,
          participant.email,
          participant.name,
          participant.company,
          participant.jobTitle,
          participant.role
        )
        .then((participant: Participant) => {
          observer.next(participant);
          observer.complete();
        })
        .catch((err: Error) => {
          observer.error(err);
        })
        .finally(() => observer.complete());
    });
  }

  getOwner(
    email: string,
    authToken: AuthToken,
    projectId: number
  ): Observable<Participant[]> {
    return this.getParticipants('', authToken, projectId).pipe(
      distinctUntilChanged(),
      map((participants: Participant[]) =>
        this.filterByEmail(email, participants)
      )
    );
  }

  private filterByEmail(email: string, data: Participant[]): Participant[] {
    return data.filter(
      (participant: Participant) => participant.email === email
    );
  }

  private getOwnerByEmail(
    email: string,
    data: Participant[]
  ): Participant | undefined {
    return data.find((participant: Participant) => participant.email === email);
  }
}
