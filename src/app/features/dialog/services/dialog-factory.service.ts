import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { DialogService } from './dialog.service';
import { DialogData, DialogOptions } from '../models';
import { DialogComponent } from '../components';

@Injectable({
  providedIn: 'root',
})
export class DialogFactoryService<T = undefined> {
  constructor(private dialog: MatDialog) {}

  open(
    dialogData: DialogData<T>,
    options: DialogOptions = { width: 960, disableClose: true }
  ): DialogService<T> {
    const dialogRef = this.dialog.open<DialogComponent<T>, DialogData<T>>(
      DialogComponent,
      {
        ...this.fetchOptions(options),
        data: dialogData,
      }
    );
    dialogRef.afterClosed().pipe(first());

    return new DialogService(dialogRef);
  }

  private fetchOptions({
    width,
    disableClose,
  }: DialogOptions): Pick<
    MatDialogConfig<DialogData<T>>,
    'width' | 'disableClose'
  > {
    return {
      width: `${width}px`,
      disableClose,
    };
  }
}
