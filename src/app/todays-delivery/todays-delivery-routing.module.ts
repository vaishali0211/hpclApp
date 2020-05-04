import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodaysDeliveryPage } from './todays-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: TodaysDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaysDeliveryPageRoutingModule {}
