import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { ContextMenuActionModel } from '../../models';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent<T> extends BaseComponent {
  @Input() actions!: ContextMenuActionModel<T>[];
  @Input() actor!: T;

  constructor() {
    super();
  }
}
