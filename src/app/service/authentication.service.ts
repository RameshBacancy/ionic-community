import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private googlePlus: GooglePlus,
    private userService: UserService,
  ) {}

  error: any;

  async nativeGoogleLogin() {
    this.googlePlus.login({
      'webClientId': '1077237492199-bmga3td66gkh91vdflkanid7n4o46a5v.apps.googleusercontent.com',
      'offline': true
    })
    .then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(() => {     
        this.userService.addUserDetails()
      })
    })
  }

  logout() {
    firebase.auth().signOut()
    .then(() => {
      alert('logout')
    })
    .catch(err => {
      alert('firebase ::' + JSON.stringify(err))
    })
  }
}