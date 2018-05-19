import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { Storage } from '@ionic/storage';
import { EditDataPage } from '../edit-data/edit-data';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
login: string = "SignUp";
  constructor (private navCtrl: NavController, private stor: Storage,
    private authService: AuthService, private loadingCtrl: LoadingController,
      private alertCtrl: AlertController) {}

  onSubmit() {
      console.log("Success")
      this.onSuccess()
  }

  onSuccess() {
    this.navCtrl.setRoot(TabsPage);
    this.stor.set('hasLogin', true);
  }

  onSignUp(form: NgForm) {
    // form.value.email, form.value.password
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.signUp(form.value.email,form.value.password)
    .then(data => {
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signup failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
    this.navCtrl.push(EditDataPage, {signUp: true})
  }

  onLogIn(form: NgForm) {
    // form.value.email, form.value.password
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signIn(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Login failed!',
          message: error.message,
          buttons: ['Ok']
        })
        alert.present();
      });
    this.onSuccess();
  }

}
