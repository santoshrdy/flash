import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightdetailsRoutingModule } from './flightdetails-routing.module';
import { FlightdetailsComponent } from './flightdetails.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FlightdetailsComponent],
  imports: [
    CommonModule,
    FlightdetailsRoutingModule,
    SharedModule
  ]
})
export class FlightdetailsModule { }
