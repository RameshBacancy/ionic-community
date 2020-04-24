import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { SplashScreenPage } from './splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenPage
  }
];

@NgModule({
  declarations: [
    SplashScreenPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class SplashScreenPageModule {}
