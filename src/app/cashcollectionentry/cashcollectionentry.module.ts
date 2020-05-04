import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashcollectionentryPageRoutingModule } from './cashcollectionentry-routing.module';

import { CashcollectionentryPage } from './cashcollectionentry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CashcollectionentryPageRoutingModule
  ],
  declarations: [CashcollectionentryPage]
})
export class CashcollectionentryPageModule {}
