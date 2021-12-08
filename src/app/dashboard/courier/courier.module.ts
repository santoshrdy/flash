import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourierRoutingModule } from './courier-routing.module';
import { CourierComponent } from './courier.component';


@NgModule({
  declarations: [CourierComponent],
  imports: [
    CommonModule,
    CourierRoutingModule
  ]
})
export class CourierModule { }
