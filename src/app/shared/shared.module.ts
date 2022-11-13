import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseComponent,
  ContextMenuComponent,
  ParticipantTableComponent,
  ViewTitleComponent,
  WorkPackagesTableComponent,
} from './components';
import { MaterialModule } from './material.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    BaseComponent,
    ParticipantTableComponent,
    ContextMenuComponent,
    ViewTitleComponent,
    WorkPackagesTableComponent,
  ],
  imports: [CommonModule, MaterialModule, MatPaginatorModule],
  exports: [
    BaseComponent,
    ViewTitleComponent,
    ParticipantTableComponent,
    ContextMenuComponent,
    WorkPackagesTableComponent,
  ],
})
export class SharedModule {}
