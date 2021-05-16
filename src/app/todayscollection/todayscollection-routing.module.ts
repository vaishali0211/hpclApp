import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodayscollectionPage } from './todayscollection.page';

const routes: Routes = [
  {
    path: '',
    component: TodayscollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodayscollectionPageRoutingModule {}
