import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-core',
  templateUrl: './login-core.page.html',
  styleUrls: ['./login-core.page.scss'],
})
export class LoginCorePage implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authenticationService.nativeGoogleLogin()
  }

  navigateToHome() {
    this.router.navigateByUrl('home');
  }
}