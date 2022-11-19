import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesPageComponent } from './pages';
import {
  AttendeesContainerComponent,
  ParticipantModalContainerComponent,
  SharedAttendeesContainerComponent,
} from './containers';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesRoutingEnum } from './attendees-rounting.enum';
import { UsersResolver } from './resolvers';
import { SharedModule } from '../../shared';
import { AttendeesService, UserService } from './services';
import { DialogModule } from '../dialog/dialog.module';
import { FormParticipantComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';

const routes: Routes = [
  {
    path: AttendeesRoutingEnum.Home,
    component: AttendeesPageComponent,
    resolve: {
      users: UsersResolver,
    },
    children: [
      {
        path: `${AttendeesRoutingEnum.Create}/:projectId`,
        component: ParticipantModalContainerComponent,
        resolve: {
          users: UsersResolver,
        },
      },
    ],
  },
];

@NgModule({
  declarations: [
    FormParticipantComponent,
    AttendeesPageComponent,
    AttendeesContainerComponent,
    SharedAttendeesContainerComponent,
    ParticipantModalContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [AttendeesService, UserService],
})
export class AttendeesModule {}
