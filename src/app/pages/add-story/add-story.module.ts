import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

import { AddStoryPage } from './add-story.page';
import { SpinnerPageModule } from 'src/app/core/spinner/spinner.module';

const routes: Routes = [
  {
    path: '',
    component: AddStoryPage
  }
];

@NgModule({
  declarations: [
    AddStoryPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    SpinnerPageModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddStoryPageModule {}
