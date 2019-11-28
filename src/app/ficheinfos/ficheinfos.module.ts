import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicheinfosPageRoutingModule } from './ficheinfos-routing.module';

import { FicheinfosPage } from './ficheinfos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheinfosPageRoutingModule
  ],
  declarations: [FicheinfosPage]
})
export class FicheinfosPageModule {}
