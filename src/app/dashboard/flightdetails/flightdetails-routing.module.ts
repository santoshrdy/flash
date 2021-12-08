import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightdetailsComponent } from './flightdetails.component';

const routes: Routes = [{
  path:'', component:FlightdetailsComponent
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightdetailsRoutingModule { }
