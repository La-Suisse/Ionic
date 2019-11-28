import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListfichePageRoutingModule } from './listfiche-routing.module';

import { ListfichePage } from './listfiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListfichePageRoutingModule
  ],
  declarations: [ListfichePage]
})
export class ListfichePageModule {}
