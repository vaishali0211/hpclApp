import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from "./menu.page";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule
],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
