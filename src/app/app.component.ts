import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('noInternet', { static: true }) noInternet: ElementRef

  constructor( 
    private router: Router,   
    private network: Network,
    private platform: Platform,
    private renderer: Renderer2,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen 
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#517a9f');
    });
  }

  ngOnInit() {
    this.checkInternetConnectivity()
    // this.canLoadService.canLoadSplashScreen.next(true)
  }

  checkInternetConnectivity() {
    this.network.onDisconnect().subscribe(() => {
      this.renderer.addClass(this.noInternet.nativeElement, 'show')
    })
    this.network.onConnect().subscribe(() => {
      this.renderer.removeClass(this.noInternet.nativeElement, 'show')
    })
  }
}
