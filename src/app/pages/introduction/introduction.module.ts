import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { IntroductionPage } from './introduction.page';
import { LoginCorePageModule } from 'src/app/core/login-core/login-core.module';

const routes: Routes = [
  {
    path: '',
    component: IntroductionPage
  }
];

@NgModule({
  declarations: [
    IntroductionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCorePageModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IntroductionPageModule {}
