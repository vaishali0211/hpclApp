import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddopeningstockPageRoutingModule } from './addopeningstock-routing.module';

import { AddopeningstockPage } from './addopeningstock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddopeningstockPageRoutingModule
  ],
  declarations: [AddopeningstockPage]
})
export class AddopeningstockPageModule {}
