import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { BaggageLossComponent } from './baggage-loss/baggage-loss.component';


@NgModule({
  declarations: [DashboardComponent, BookingInfoComponent, BaggageLossComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
 