import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { SpinnerPage } from './spinner.page';

@NgModule({
  declarations: [
    SpinnerPage
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    SpinnerPage
  ]
})
export class SpinnerPageModule {}
