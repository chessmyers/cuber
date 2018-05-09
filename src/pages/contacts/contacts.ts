import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Person } from '../../models/person';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor (private storage: Storage, private modalCtrl: ModalController) {}

    // ngOnInit() {
    //   this.storage.get('hasLogin').then((val) => {
    //       console.log(val)
    //       if (val == null) {
    //         this.showLoginModal();
    //       }
    //   }).catch(() => {
    //     this.showLoginModal()
    //   });
    // }

    showLoginModal() {
      let loginModal = this.modalCtrl.create(LoginPage, {}, {showBackdrop: false, enableBackdropDismiss: false});
      loginModal.present();
    }

    persons = [
      {
     name: 'Johnny Cub',
     grade: 10,
     canDrive: false,
     distance: 18
   },
      {
    name: 'Jimmy Cub',
    grade: 12,
    canDrive: true,
    distance: 19
      }
  ]

}
