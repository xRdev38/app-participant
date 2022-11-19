import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../../shared';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { AttendeesService } from '../../services';
import { Participant } from '@core/models';

@Component({
  selector: 'app-attendees-page',
  templateUrl: './attendees-page.component.html',
  styleUrls: ['./attendees-page.component.scss'],
})
export class AttendeesPageComponent extends BaseComponent {
  isLoading = false;
  private _owner$ = new BehaviorSubject<Participant[]>([]);

  get owner$(): Observable<Participant[]> {
    return this._owner$.asObservable();
  }

  private _attendees$ = new BehaviorSubject<Participant[]>([]);

  get attendees$(): Observable<Participant[]> {
    return this._attendees$.asObservable();
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly attendeesService: AttendeesService
  ) {
    super();
    this.isLoading = true;
    this.router.events
      .pipe(
        takeUntil(this.onDestroy$),
        switchMap(() => this.route.data),
        switchMap(data => {
          const { users } = data;
          return combineLatest([
            this.attendeesService.getOwner(
              users.user.login,
              users.authToken,
              34567
            ),
            this.attendeesService.getParticipants(
              users.user.login,
              users.authToken,
              34567
            ),
          ]);
        }),
        tap(([owner, attendees]: [Participant[], Participant[]]) => {
          this.isLoading = false;
          this._owner$.next(owner);
          this._attendees$.next(attendees);
        })
      )
      .subscribe();
  }
}
