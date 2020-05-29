import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddopeningstockPageRoutingModule } from './addopeningstock-routing.module';

import { AddopeningstockPage } from './addopeningstock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddopeningstockPageRoutingModule
  ],
  declarations: [AddopeningstockPage]
})
export class AddopeningstockPageModule {}
