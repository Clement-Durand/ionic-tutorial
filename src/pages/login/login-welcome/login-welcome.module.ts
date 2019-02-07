import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginWelcomePage } from './login-welcome';

@NgModule({
  declarations: [
    LoginWelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginWelcomePage),
  ],
})
export class LoginWelcomePageModule {}
