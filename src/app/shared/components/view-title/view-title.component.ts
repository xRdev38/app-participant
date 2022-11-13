import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-view-title',
  templateUrl: './view-title.component.html',
  styleUrls: ['./view-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTitleComponent extends BaseComponent {
  @Input() set viewTitle(value: string) {
    this._viewTitle$.next(value);
  }

  get viewTitle$(): Observable<string> {
    return this._viewTitle$.asObservable();
  }

  @Input() set subtitle(value: string) {
    this._subtitle$.next(value);
  }

  get subtitle$(): Observable<string> {
    return this._subtitle$.asObservable();
  }

  @Input() set btnAction(value: boolean) {
    this._btnAction$.next(value);
  }

  get btnAction$(): Observable<boolean> {
    return this._btnAction$.asObservable();
  }

  @Output() sendingParticipant = new EventEmitter<void>();

  private _viewTitle$ = new BehaviorSubject<string>('');
  private _subtitle$ = new BehaviorSubject<string>('');
  private _btnAction$ = new BehaviorSubject<boolean>(false);

  constructor() {
    super();
  }

  addParticipant(): void {
    this.sendingParticipant.emit();
  }
}
