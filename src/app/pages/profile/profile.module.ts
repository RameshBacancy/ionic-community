import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { FirebaseModule } from 'src/app/core/firebase.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfilePageModule {}
