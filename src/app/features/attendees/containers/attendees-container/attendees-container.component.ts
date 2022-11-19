import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../shared';
import { Participant } from '@core/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-attendees-container',
  templateUrl: './attendees-container.component.html',
  styleUrls: ['./attendees-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttendeesContainerComponent extends BaseComponent {
  viewTitle = 'Propriétaire du projet';
  isActivitiesPageable = false;
  private _attendees$ = new BehaviorSubject<Participant[]>([]);

  @Input() set attendees(value: Participant[]) {
    this._attendees$.next(value);
  }

  get attendees$(): Observable<Participant[]> {
    return this._attendees$.asObservable();
  }

  constructor() {
    super();
  }
}
