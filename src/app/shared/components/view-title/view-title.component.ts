import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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

  @Input() set subtitle(value: string) {
    this._subtitle$.next(value);
  }

  get viewTitle$(): Observable<string> {
    return this._viewTitle$.asObservable();
  }

  get subtitle$(): Observable<string> {
    return this._subtitle$.asObservable();
  }

  private _viewTitle$ = new BehaviorSubject<string>('');
  private _subtitle$ = new BehaviorSubject<string>('');

  constructor() {
    super();
  }
}
