import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';

@Injectable()
export class SettingsService {

    constructor(private navContrl: NavController) {
      this.navContrl = navContrl;
    }

    changeCol(col:string) {
        console.log(".")
    }

    popRoot() {
      this.navContrl.setRoot(LoginPage, () => {this.navContrl.popToRoot()});
    }


}
