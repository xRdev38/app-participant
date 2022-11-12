import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { ContextMenuActionModel } from '../../models';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent extends BaseComponent {
  @Input() actions!: ContextMenuActionModel<any>[];
  @Input() actor: any;

  constructor() {
    super();
  }
}
