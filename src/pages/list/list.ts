import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from './item-details/item-details';
import {SwapiService} from "../../services/swapi.service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{name: string, homeworld: string, films: string[], birth_year: string, species: string, gender: string, icon: string, img: string}>;
  listSize = 10;
  dbSize = 87;
  iconStar = 'star';
  constructor(public navCtrl: NavController, public navParams: NavParams, private swapiService: SwapiService) {
  }

  async ngOnInit() {
    let test = {
      Human: 'man',
      Humanoid: 'man',
      Droid: 'logo-android',
    };
    this.items = [];
    let start = Math.floor(Math.random() * (this.dbSize - this.listSize -1) + 1);
    for(let i = 1; i <= this.listSize; i++) {
      let character = await this.swapiService.getCharacterFromId(i + start);
      let icon;
      console.log(character);
      if(character.species == 'Humanoid' || character.species == 'Human' || character.species == 'Droid'){
        icon = test[character.species];
      } else {
        icon = 'help';
      }
      let img = './../../assets/imgs/card-img-' + (Math.floor(Math.random() * 100)%5 + 1) + '.jpg';
      this.items.push({
        name: character.name,
        homeworld: character.homeworld,
        films: character.films,
        birth_year: character.birth_year,
        species: character.species,
        gender: character.gender,
        icon: icon,
        img: img,
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  refresh() {
    this.navCtrl.setRoot(ListPage)
  }

  calc(number): number {
    return Math.floor(Math.random() * 100 + number);
  }
}
