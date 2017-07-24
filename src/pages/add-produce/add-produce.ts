import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProduceList } from '../produce-list/produce-list';

@Component({
  selector: 'page-add-produce',
  templateUrl: 'add-produce.html'
})
export class AddProducePage {
  constructor(public navCtrl: NavController) {}

  save() {
    this.navCtrl.push(ProduceList);
  }
}
