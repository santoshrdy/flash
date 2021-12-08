import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path:'',component:DashboardComponent,
  children:[
    { path: 'flightdetails', loadChildren: () => import('./flightdetails/flightdetails.module').then((m) => m.FlightdetailsModule) },
   { path: 'bookingInfo', loadChildren: () => import('./booking-info/booking-info.module').then((m) => m.BookingInfoModule) },
   { path: 'payment', loadChildren: () => import('./payment/payment.module').then((m) => m.PaymentModule) },
   { path: 'checkin', loadChildren: () => import('./checkin/checkin.module').then((m) => m.CheckinModule) },
   { path: 'flightstatus', loadChildren: () => import('./flightstatus/flightstatus.module').then((m) => m.FlightstatusModule) },
   { path: 'courier', loadChildren: () => import('./courier/courier.module').then((m) => m.CourierModule) },
   { path: 'baggageloss', loadChildren: () => import('./baggage-loss/baggage-loss.module').then((m) => m.BaggageLossModule) },
   { path: 'refund', loadChildren: () => import('./refund/refund.module').then((m) => m.RefundModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
