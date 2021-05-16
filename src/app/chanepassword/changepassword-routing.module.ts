import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChanepasswordPage } from './changepassword.page';

const routes: Routes = [
  {
    path: '',
    component: ChanepasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChanepasswordPageRoutingModule {}
