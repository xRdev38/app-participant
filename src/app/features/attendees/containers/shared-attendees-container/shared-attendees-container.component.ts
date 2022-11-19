import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
} from '@angular/core';
import { BaseComponent } from '../../../../shared';
import { BehaviorSubject, Observable } from 'rxjs';
import { Participant } from '@core/models';
import { ContextMenuActionModel } from '../../../../shared/models';
import { Router } from '@angular/router';
import { AttendeesRoutingEnum } from '../../attendees-rounting.enum';

@Component({
  selector: 'app-shared-attendees-container',
  templateUrl: './shared-attendees-container.component.html',
  styleUrls: ['./shared-attendees-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedAttendeesContainerComponent extends BaseComponent {
  viewTitle = 'Projet partagé avec';
  isActivitiesPageable = true;
  isActivatedBtnAction = true;
  actions!: any;
  private _attendees$ = new BehaviorSubject<Participant[]>([]);

  @Input() set attendees(value: Participant[]) {
    this._attendees$.next(value);
  }

  @Input() projectId!: number;

  get attendees$(): Observable<Participant[]> {
    return this._attendees$.asObservable();
  }

  constructor(private injector: Injector, private readonly router: Router) {
    super();
    this.actions = this.buildActions();
  }

  async openDialog(): Promise<void> {
    await this.router.navigate([
      '/',
      'attendees',
      AttendeesRoutingEnum.Create,
      `${this.projectId}`,
    ]);
  }

  private buildActions(): ContextMenuActionModel<Participant>[] {
    return [
      {
        name: 'test',
        icon: 'add',
        isHidden: () => false,
        action: () => {
          console.log('Clicked !');
        },
      },
    ];
  }
}
