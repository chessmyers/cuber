import { Component } from '@angular/core';

import { ContactsPage } from '../contacts/contacts';
import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';
import { SettingsService } from '../../services/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = ContactsPage;
  tab3Root = SettingsPage;

  constructor() {

  }

  ionViewDidLoad() {

  }
}
