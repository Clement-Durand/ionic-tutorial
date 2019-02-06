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
    let test = {
      Human: 'man',
      Humanoid: 'man',
      Droid: 'logo-android',
    };
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build', 'man'];
    this.items = [];
    let start = Math.floor(Math.random() * 76 + 1);
    for(let i = 1; i < 11; i++) {
      let character = await this.swapiService.getCharacterFromId(i + start);
      let icon;
      console.log(character);
      if(character.species == 'Humanoid' || character.species == 'Human' || character.species == 'Droid'){
        icon = test[character.species];
      } else {
        icon = this.icons[Math.floor(Math.random() * this.icons.length)];
      }
      this.items.push({
        name: character.name,
        homeworld: character.homeworld,
        icon: icon
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
