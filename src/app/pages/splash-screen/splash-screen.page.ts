import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.checkFirstTime()
    }, 4000);
  }

  checkFirstTime() {
    console.log(this.storage.get('firstTime'))
    this.storage.get('firstTime').then(val => {
      if (val) {
        this.router.navigateByUrl('/home')
      } else {
        this.storage.set('firstTime', true);
        this.router.navigateByUrl('/introduction')
      }
    })
  }
}