import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor (private navCtrl: NavController, private stor: Storage) {}

  onSubmit() {
      console.log("Success")
      this.onSuccess()
  }

  onSuccess() {
    this.navCtrl.setRoot(TabsPage);
    this.stor.set('hasLogin', true);
  }

}
