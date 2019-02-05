export class Character {
  name: string;
  birth_year: string;
  homeworld: string;
  gender: string;
  /*
     films: string;
     species: string[];
     */
  /*
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  created: string;
  edited: string;
  starships: string[];
  url: string;
  vehicles: string[];
  */

  constructor(name: string, birth_year: string, homeworld: string, gender: string){
    this.name = name;
    this.birth_year = birth_year;
    this.homeworld = homeworld;
    this.gender = gender;
  };
}
