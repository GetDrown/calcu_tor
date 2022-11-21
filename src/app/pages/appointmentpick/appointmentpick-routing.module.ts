import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentpickPage } from './appointmentpick.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentpickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentpickPageRoutingModule {}
