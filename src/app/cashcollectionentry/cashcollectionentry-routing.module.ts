import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashcollectionentryPage } from './cashcollectionentry.page';

const routes: Routes = [
  {
    path: '',
    component: CashcollectionentryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashcollectionentryPageRoutingModule {}
