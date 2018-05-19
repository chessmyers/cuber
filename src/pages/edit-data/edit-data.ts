import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Person } from '../../models/person';

@IonicPage()
@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html',
})
export class EditDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController) {
            this.isSignUp = navParams.get('signUp');
  }

  isSignUp: boolean;

  onCancel() {
    this.navCtrl.pop();
  }

  onSubmit(form: NgForm) {
    //  name, address, grade, drives, phoneNum, email (form.value.***)
    console.log(form);
    let toast = this.toastCtrl.create({
      message: 'Data Saved!',
      duration: 2000
    });
    toast.present();
  }

}
