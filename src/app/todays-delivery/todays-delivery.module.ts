import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TodaysDeliveryPageRoutingModule } from './todays-delivery-routing.module';

import { TodaysDeliveryPage } from './todays-delivery.page';

import { DeliveryDetailsPageModule } from '../delivery-details/delivery-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodaysDeliveryPageRoutingModule,
    DeliveryDetailsPageModule
  ],
  declarations: [TodaysDeliveryPage]
})
export class TodaysDeliveryPageModule {}
