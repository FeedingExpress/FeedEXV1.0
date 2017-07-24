import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddProducePage } from '../add-produce/add-produce';
import { AddSendNotification } from '../new-message/new-message';
import { AddTestPage } from '../test/test';

const data = [{
produce: 'Watermelon',
Cost: '$0.060/lb',
expiry: '5 days to expiry',
pallets: '42 Pallets',
id: 0
},{
produce: 'Onions',
Cost : '$0.100/lb',
expiry: '6 days to expiry',
pallets: '21 Pallets',
Pack: 'Bin',
id: 1
},{
produce: 'Potatoes',
Cost: 'Free',
expiry: '7 days to expiry',
pallets: '16 Pallets',
Pack: 'Bin',
id: 3
},{
produce: 'Limes',
Cost: '$0.100/lb',
expiry: '8 days to expiry',
pallets: '2 Pallets',
Pack: 'Sack',
id: 4
},{
produce: 'Tomatoes',
Cost : '$0.030/lb',
expiry: '8 days to expiry',
pallets: '21 Pallets',
Pack: 'Box',
id: 5
},{
produce: 'Bell Peppers',
Cost: '$0.020/lb',
expiry: '9 days to expiry',
pallets: '21 Pallets',
Pack: 'Sack',
id: 6
},]


@Component({
  selector: 'page-produce-list',
  templateUrl: 'produce-list.html'
})
export class ProduceList {
    posts : any
  constructor(public navCtrl: NavController) {
    this.posts = data;
  }



  addProduce() {
    this.navCtrl.push(AddProducePage);
  }

  addTest(){
    this.navCtrl.push(AddTestPage);
  }

  sendNotification() {
    this.navCtrl.push(AddSendNotification);
  }
  Notification() {
    this.navCtrl.push(Notification);
  }

}
