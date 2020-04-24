import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { LoginCorePageModule } from 'src/app/core/login-core/login-core.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCorePageModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LoginPage
  ]
})
export class LoginPageModule {}
