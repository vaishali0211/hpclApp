import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodayscollectionPageRoutingModule } from './todayscollection-routing.module';

import { TodayscollectionPage } from './todayscollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodayscollectionPageRoutingModule
  ],
  declarations: [TodayscollectionPage]
})
export class TodayscollectionPageModule {}
