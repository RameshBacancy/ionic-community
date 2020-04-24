import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { MenuPageModule } from 'src/app/pages/home/menu/menu.module';
import { CategoryPageModule } from './category/category.module';
import { StoryListPageModule } from './story-list/story-list.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageModule,
    CategoryPageModule,
    StoryListPageModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule {}
