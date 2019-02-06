import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from "../model/character";

@Injectable()
export class SwapiService {
  url = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }

  async getCharacterFromId(id: number): Promise<Character> {
    if(id === 17) return this.getCharacterFromId(1); //there is no character with id 17 in swapi
    const response = await this.http.get(this.url + 'people/' + id).toPromise();
    const planet = await this.http.get(response['homeworld']).toPromise();
    const mainSpeciesUrl = response['species'][0];
    const species = await this.http.get(mainSpeciesUrl).toPromise();
    let films = [];
    for(let filmUrl of response['films']){
      films.push(( await this.http.get(filmUrl).toPromise())['title']);
    }
    return new Character(response['name'], response['birth_year'], planet['name'], response['gender'], species['name'], films);
  }
}
