import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  // add user details to firebase database
  addUserDetails() {
    this.angularFireDatabase.object('/' + 'users/' + firebase.auth().currentUser.uid + '/userdetails').set({
      email: firebase.auth().currentUser.email,
    })
    this.router.navigateByUrl('home')
  }
}