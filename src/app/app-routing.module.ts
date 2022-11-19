import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/attendees',
    pathMatch: 'full',
  },
  {
    path: 'attendees',
    loadChildren: () =>
      import('./features/attendees/attendees.module').then(
        module => module.AttendeesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
