import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {ListPage} from "../../list/list";

/**
 * Generated class for the LoginWelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-welcome',
  templateUrl: 'login-welcome.html',
})
export class LoginWelcomePage {
  page = { title: 'My First List', component: ListPage };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.navCtrl.setRoot(this.page.component);
  }
}
