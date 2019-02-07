import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSignInPage } from './login-sign-in';

@NgModule({
  declarations: [
    LoginSignInPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSignInPage),
  ],
})
export class LoginSignInPageModule {}
