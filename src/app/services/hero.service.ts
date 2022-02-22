import { Injectable } from '@angular/core';
import { IHero } from '../interfaces/IHero';
import { InMemoryDatabaseService } from './data/in-memory.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private imdbs: InMemoryDatabaseService) {}

  getHeroes(): IHero[] {
    return this.imdbs.getAllHeroes();
  }

  getTopHeroes(): IHero[] {
    return this.imdbs.getAllHeroes().slice(0, 4);
  }

  updateHero(id: number, name: string): IHero | null {
    return this.imdbs.updateHero(id, name);
  }

  getHero(id: number): IHero | null {
    return this.imdbs.getHero(id);
  }
}
