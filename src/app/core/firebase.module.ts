import { NgModule } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

firebase.initializeApp(environment.firebaseConfig)

@NgModule({
  declarations: [],
  imports: [
    AngularFireAuthModule, 
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    AngularFireAuthModule, 
    AngularFireDatabaseModule,
  ],
  providers: [
  ]
})
export class FirebaseModule { }
