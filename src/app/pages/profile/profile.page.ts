import * as firebase  from 'firebase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  user: firebase.User

  ngOnInit() {
    this.user = firebase.auth().currentUser
    console.log(this.user)
  }

}
