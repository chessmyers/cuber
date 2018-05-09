import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor (private alertCtrl: AlertController, private stor: Storage,
              private toastCtrl: ToastController, private navCtrl: NavController) {}

  deleteData() {
    let confirm = this.alertCtrl.create({
      title: 'Delete Data?',
      message: 'Are you sure you wish to be removed from Cuber?',
      buttons: [
        {
          text: 'Never Mind',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes, Please Do',
          handler: () => {
            this.stor.clear();
            let toast = this.toastCtrl.create({
              message: 'Data was successfully deleted',
              duration: 2000
            });
            toast.present();
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
