import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
  constructor(public appCtrl: App) {}

  join() {
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
