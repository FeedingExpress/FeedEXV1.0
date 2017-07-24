import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddProducePage } from '../add-produce/add-produce';
import { AddSendNotification } from '../new-message/new-message';
import { AddTestPage } from '../test/test';

const data = [{
title: 'Watermelon',
body: '$0.060/lb',
id: 0
},{
title: 'Onions',
body : '$0.100/lb',
id: 1
},{
title: 'Potatoes',
body: 'Free',
id: 3
},{
title: 'Limes',
body: '$0.100/lb',
id: 0
},{
title: 'Tomatoes',
body : '$0.030/lb',
id: 1
},{
title: 'Bell Peppers',
body: '$0.020/lb',
id: 3
},]

// import { AddProducePage } from '../add-produce/add-produce';

@Component({
  selector: 'page-address-book',
  templateUrl: 'address-book.html'
})
export class AddressBook {
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

}
