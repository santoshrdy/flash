import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightstatusRoutingModule } from './flightstatus-routing.module';
import { FlightstatusComponent } from './flightstatus.component';


@NgModule({
  declarations: [FlightstatusComponent],
  imports: [
    CommonModule,
    FlightstatusRoutingModule
  ]
})
export class FlightstatusModule { }
