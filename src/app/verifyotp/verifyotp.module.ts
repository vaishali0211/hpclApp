import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyotpPageRoutingModule } from './verifyotp-routing.module';

import { VerifyotpPage } from './verifyotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VerifyotpPageRoutingModule
  ],
  declarations: [VerifyotpPage]
})
export class VerifyotpPageModule {}
