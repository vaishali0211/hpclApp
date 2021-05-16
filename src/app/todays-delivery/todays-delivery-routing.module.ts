import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodaysDeliveryPage } from './todays-delivery.page';
import { TodaysDeliveryPageModule} from './todays-delivery.module';
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
