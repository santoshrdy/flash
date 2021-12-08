import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingInfoRoutingModule } from './booking-info-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingInfoRoutingModule,
    SharedModule
  ]
})
export class BookingInfoModule { }
