import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChanepasswordPageRoutingModule } from './changepassword-routing.module';

import { ChanepasswordPage } from './changepassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ChanepasswordPageRoutingModule
  ],
  declarations: [ChanepasswordPage]
})
export class ChanepasswordPageModule {}
