import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { BaseComponent } from '../base.component';
import { Participant } from '@core/models';
import { ContextMenuActionModel } from '../../models';
import { BehaviorSubject, Observable, takeUntil } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-participant-table',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantTableComponent extends BaseComponent {
  @Input() set attendees(value: Participant[]) {
    this._attendees$.next(new MatTableDataSource(value));
  }

  get attendees$(): Observable<MatTableDataSource<Participant>> {
    return this._attendees$.asObservable();
  }

  @Input() actions!: ContextMenuActionModel<Participant>[];
  @Input() hasPagination: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _attendees$ = new BehaviorSubject<any>([]);

  displayedColumns: string[] = [
    'email',
    'name',
    'company',
    'status',
    'role',
    'actions',
  ];

  constructor() {
    super();

    this.onInit$.pipe(takeUntil(this.onDestroy$)).subscribe({
      next: () => {
        if (!this.actions) {
          this.displayedColumns.pop();
        }
      },
    });

    this.onAfterViewInit$.pipe(takeUntil(this.onDestroy$)).subscribe({
      next: () => {
        const dataSource = this._attendees$.value;
        dataSource.paginator = this.paginator;
        dataSource.sort = this.sort;
        this._attendees$.next(dataSource);
      },
      error: err => console.error(err),
    });
  }
}
