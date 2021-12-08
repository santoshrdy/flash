import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaggageLossComponent } from './baggage-loss.component';

const routes: Routes = [{
  path:'',component:BaggageLossComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaggageLossRoutingModule { }
