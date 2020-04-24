import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginCorePage } from './login-core.page';

@NgModule({
  declarations: [
    LoginCorePage
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoginCorePage
  ]
})
export class LoginCorePageModule {}
