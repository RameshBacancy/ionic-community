import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private router: Router,
    private shareService: ShareService,
    private angularFireAuth: AngularFireAuth,
    private authenticationService: AuthenticationService
  ) { }

  user: firebase.User;

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(user => {
      this.user = user
    })
  }

  navigateToProfile() {
    if (this.user) {
      this.router.navigateByUrl('/profile')
    } else {
      this.router.navigateByUrl('/login')
    }
  }

  navigateToYourStory() {
    this.router.navigateByUrl('/addstory');
  }

  navigateToAbout() {
    
  }

  shareApp() {
    this.shareService.options = {
      message: 'Share Thanks Mummy',
      subject: '',
      files: '',
      url: 'https://play.google.com/store',
      chooserTitle: ''
    }
    this.shareService.shareApp()
  }

  navigateToFeedback() {
    
  }

  navigateToRateUsHere() {

  }

  navigateToHelp() {

  }

  logout() {
    this.authenticationService.logout()
  }
}
