import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ViewChild } from '@angular/core'
import { AuthService } from '../services/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage; // Also the root
  tabsPage:any = TabsPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen, private storage: Storage,
    private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyB0PnuINvMDox3fy7BeUaKzno7-eXcUee4",
      authDomain: "cuber-1525912726482.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
      } else {
        this.isAuthenticated = false;
        this.rootPage = LoginPage;
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLogOut() {
    this.authService.logOut();
  }

  // ngOnInit() {
  //   this.storage.get('hasLogin').then((val) => {
  //       console.log(val)
  //       if (val == null) {
  //         this.rootPage = LoginPage;
  //       }
  //   }).catch(() => {
  //     console.log("storage error")
  //   });
  // }
}
