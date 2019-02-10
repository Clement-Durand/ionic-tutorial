import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from "../../list/list";

@IonicPage()
@Component({
  selector: 'page-login-sign-in',
  templateUrl: 'login-sign-in.html',
})
export class LoginSignInPage {
  hasFailed = false;
  emailRight = "johndoe@gmail.com";
  passwordRight = "JohnDoe1";
  email;
  password;
  nextPage = { title: 'Character List', component: ListPage }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  validate() {
    if(!(this.email === this.emailRight) || !(this.password === this.passwordRight)) {
      this.hasFailed = true;
    } else {
      this.navCtrl.setRoot(this.nextPage.component);
    }
  }

}
