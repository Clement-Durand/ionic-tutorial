import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from "../model/character";

@Injectable()
export class SwapiService {
  url = 'https://swapi.co/api/';
  constructor(private http: HttpClient) { }

  async getCharacterFromId(id: number): Promise<Character> {
    const response = await this.http.get(this.url + 'people/' + id).toPromise();
    const planet = await this.http.get(response['homeworld']).toPromise();
    // const films = await this.http.get(response['films']).toPromise();
    return new Character(response['name'], response['birth_year'], planet['name'], response['gender']);
  }
}
