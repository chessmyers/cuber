import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { EditDataPage } from '../edit-data/edit-data';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor (private alertCtrl: AlertController, private stor: Storage,
              private toastCtrl: ToastController, private navCtrl: NavController,
                private modalCtrl: ModalController) {}

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
          }
        }
      ]
    });
    confirm.present();

  }

  editData() {
    let modal = this.modalCtrl.create(EditDataPage, {signUp: false});
    modal.present();
  }

}
