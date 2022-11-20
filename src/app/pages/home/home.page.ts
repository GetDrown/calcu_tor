import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  roleMsg = ' ';
  
  constructor(private alertController: AlertController) {}
  
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning!',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
        },
       ],
     });
    await alert.present();
  }

  ngOnInit() {
  }
  
  
}
