import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProduceList } from '../produce-list/produce-list';
import { ReceivedOrders } from '../received-orders/received-orders';
import { AddressBook  } from '../address-book/address-book';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

tab1Root: any =  ProduceList;
tab2Root: any =  ReceivedOrders;
tab3Root: any =  AddressBook;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
