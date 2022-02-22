import { Injectable } from '@angular/core';
import { IHero } from '../../interfaces/IHero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDatabaseService {
  heroes: IHero[] = [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Spider-Man' },
    { id: 3, name: 'Black Widow' },
    { id: 4, name: 'Hulk' },
    { id: 5, name: 'Superman' },
    { id: 6, name: 'Batman' },
    { id: 7, name: 'Thor' },
  ];
  constructor() {}

  getAllHeroes(): IHero[] {
    return this.heroes;
  }

  updateHero(id: number, name: string): IHero | null {
    let heroToReturn = null;
    this.heroes.forEach((hero) => {
      if (hero.id === id) {
        hero.name = name;
        heroToReturn = hero;
      }
    });
    return heroToReturn;
  }

  getHero(id: number): IHero | null {
    let returnedHero = null;
    this.heroes.forEach((hero) => {
      if (hero.id === id) {
        returnedHero = hero;
      }
    });
    return returnedHero === undefined ? null : returnedHero;
  }
}
