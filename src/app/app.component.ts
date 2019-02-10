import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginWelcomePage} from "../pages/login/login-welcome/login-welcome";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginWelcomePage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Character List', component: ListPage, icon: 'list'},
      { title: 'Favorites', component: undefined, icon: 'bookmarks'},
      { title: 'Photos', component: undefined, icon: 'photos'},
      { title: 'News', component: undefined, icon: 'paper'},
      { title: 'Options', component: undefined, icon: 'settings'},
      { title: 'Logout', component: LoginWelcomePage, icon: 'log-out' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    if(!this.isCurrentPage(page)) {
      this.nav.setRoot(page.component);
    }
  }

  isCurrentPage(page) {
    if(page === undefined || this.nav.getActive() === undefined) return false;
    return this.nav.getActive().component === page.component;
  }
}
