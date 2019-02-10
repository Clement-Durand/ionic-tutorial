import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginSignInPage} from "../login-sign-in/login-sign-in";

@IonicPage()
@Component({
  selector: 'page-login-welcome',
  templateUrl: 'login-welcome.html',
})
export class LoginWelcomePage {
  nextPage = { title: 'Sign In', component: LoginSignInPage };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {
    this.navCtrl.setRoot(this.nextPage.component);
  }
}
