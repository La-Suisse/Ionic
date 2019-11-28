import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicheinfosPage } from './ficheinfos.page';

const routes: Routes = [
  {
    path: '',
    component: FicheinfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicheinfosPageRoutingModule {}
