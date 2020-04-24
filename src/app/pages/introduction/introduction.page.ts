import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ngOnInit() {

  }

  loginWithGoogle() {
    this.authenticationService.nativeGoogleLogin()
  }

  navigateToHome() {
    this.router.navigateByUrl('home')
  }
}