import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

import { SignUpPage } from '../signup/signup';
import { ProduceList } from '../produce-list/produce-list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public appCtrl: App, public navCtrl: NavController) {}

  signIn() {
    this.appCtrl.getRootNav().setRoot(ProduceList);
  }

  signup() {
    this.navCtrl.push(SignUpPage);
  }
}
