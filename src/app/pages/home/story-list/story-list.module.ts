import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { StoryListPage } from './story-list.page';
import { SpinnerPageModule } from 'src/app/core/spinner/spinner.module';

@NgModule({
  declarations: [
    StoryListPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    SpinnerPageModule
  ],
  exports: [
    StoryListPage
  ]
})
export class StoryListPageModule {}
