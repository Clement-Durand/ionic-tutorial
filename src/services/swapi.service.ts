import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from "../model/character";

@Injectable()
export class SwapiService {
  url = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }

  /**
   * Fetches the character with the given id in the set url and all the necessary associated data
   * Returns a new character with the found data
   * @param id
   */
  //TODO add error checking to try to fix toLowerCase on undefined bug
  async getCharacterFromId(id: number): Promise<Character> {
    if(id === 17) return this.getCharacterFromId(1); //there is no character with id 17 in swapi
    //construct the url from the url and id and fetch all the necessary data
    const charUrl = this.url + 'people/' + id;
    const response = await this.getDataFromUrl(charUrl);

    const planet = await this.getDataFromUrl(response['homeworld']);

    //only consider the first species of the character
    const mainSpeciesUrl = response['species'][0];
    const species = await this.getDataFromUrl(mainSpeciesUrl);

    let films = await this.getFilmsFromUrls(response['films']);

    return new Character(response['name'], response['birth_year'], planet['name'], response['gender'], species['name'], films);
  }

  /**
   * Fetches the data at the given url using the HttpClient
   * Returns a promise
   * Used to fetch the character as well as its homeworld, films and species
   * @param url
   */
  async getDataFromUrl(url: string): Promise<Object> {
    return await this.http.get(url).toPromise();
  }

  /**
   * Fetches the data at each of the given urls using the HttpClient
   * Returns an array of strings containing the titles of the found data
   * @param urls
   */
  async getFilmsFromUrls(urls: string): Promise<string[]> {
    let films = [];
    for(let filmUrl of urls){
      films.push((await this.getDataFromUrl(filmUrl))['title']);
    }
    return films;
  }
}
