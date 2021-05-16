import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddorderPageRoutingModule } from './addorder-routing.module';

import { AddorderPage } from './addorder.page';

import { DeliveryDetailsPageModule } from '../delivery-details/delivery-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddorderPageRoutingModule,
    DeliveryDetailsPageModule,
  ],
  declarations: [AddorderPage]
})
export class AddorderPageModule {}
