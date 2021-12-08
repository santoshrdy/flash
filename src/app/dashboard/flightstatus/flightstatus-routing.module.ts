import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightstatusComponent } from './flightstatus.component';

const routes: Routes = [{
  path:'', component:FlightstatusComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightstatusRoutingModule { }
