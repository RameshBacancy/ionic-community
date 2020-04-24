import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

@NgModule({
  declarations: [
    MenuPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [
    MenuPage
  ]
})
export class MenuPageModule {}
