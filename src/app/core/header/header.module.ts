import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPage } from './header.page';

@NgModule({
  declarations: [
    HeaderPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    HeaderPage
  ]
})
export class HeaderPageModule {}