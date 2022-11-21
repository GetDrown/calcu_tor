import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentpickPageRoutingModule } from './appointmentpick-routing.module';

import { AppointmentpickPage } from './appointmentpick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentpickPageRoutingModule
  ],
  declarations: [AppointmentpickPage]
})
export class AppointmentpickPageModule {}
