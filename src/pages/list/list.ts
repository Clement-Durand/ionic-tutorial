import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import {SwapiService} from "../../services/swapi.service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{name: string, homeworld: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiService: SwapiService) {
  }

  async ngOnInit() {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
    this.items = [];
    for(let i = 1; i < 11; i++) {
      let character = await this.swapiService.getCharacterFromId(i);
      this.items.push({
        name: character.name,
        homeworld: character.homeworld,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
