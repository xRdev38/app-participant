import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components';

@NgModule({
  imports: [CommonModule, MatDialogModule],
  exports: [DialogComponent],
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
})
export class DialogModule {}
