import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { StoryDetailPage } from './story-detail.page';
import { SpinnerPageModule } from 'src/app/core/spinner/spinner.module';
import { HeaderPageModule } from 'src/app/core/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: StoryDetailPage
  }
];

@NgModule({
  declarations: [
    StoryDetailPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderPageModule,
    SpinnerPageModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StoryDetailPageModule {}
