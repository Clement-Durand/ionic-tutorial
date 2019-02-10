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
  items: Array<{name: string, homeworld: string, films: string[], birth_year: string, species: string, gender: string, speciesIcon: string, img: string}>;
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
    //pick a random starting id for the list
    let start = Math.floor(Math.random() * (this.dbSize - this.listSize -1) + 1);
    //fetch the data for the 10 items of the list
    for(let i = 1; i <= this.listSize; i++) {
      let character = await this.swapiService.getCharacterFromId(i + start);
      let icon;
      if(character.species == 'Humanoid' || character.species == 'Human' || character.species == 'Droid'){
        icon = test[character.species];
      } else {
        icon = 'help';
      }
      //pick a random image as background
      let img = './../../assets/imgs/card-img-' + (Math.floor(Math.random() * 100)%5 + 1) + '.jpg';
      this.items.push({
        name: character.name,
        homeworld: character.homeworld,
        films: character.films,
        birth_year: character.birth_year,
        species: character.species,
        gender: character.gender,
        speciesIcon: icon,
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
}
