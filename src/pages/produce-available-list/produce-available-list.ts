import { App } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddSendNotification } from '../new-message/new-message';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-produce-available-list',
  templateUrl: 'produce-available-list.html'
})
export class ProduceAvailableList {
  rootPage = TabsPage;

  constructor(public navCtrl: NavController) {}

  sendNotification() {
    this.navCtrl.push(AddSendNotification);
  }
}
