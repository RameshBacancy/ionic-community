import { menuController } from '@ionic/core';
import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { CanLoadService } from 'src/app/service/can-load.service';
import { fromEvent } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input('header') header: any;

  userName: string;
  email: string;
  lastX: any;

  constructor(
    private renderer: Renderer2,
    private canLoadService: CanLoadService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.canLoadService.value = false
    const event = fromEvent(document, 'backbutton')
    event.subscribe(async () => {
      this.presentAlertConfirm()
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'No',
          handler: () => { }
        }, {
          text: 'Yes',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  openMenu() {
    menuController.open();
  }

  logScrolling(event) {
    if (event.detail.scrollTop > Math.max(0, this.lastX)) {

      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    } else {

      this.renderer.setStyle(this.header, 'margin-top', '0');
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    }

    this.lastX = event.detail.scrollTop;
  }

  scrollStart(header) {
    this.header = header.el;
  }
}