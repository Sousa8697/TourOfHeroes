import { TestBed } from '@angular/core/testing';
import { isIterationStatement } from 'typescript';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getHeroes', () => {
    it('Should not return null', () => {
      const heroes = service.getHeroes();

      expect(heroes).not.toBeNull();
    });
  });

  describe('getTopHeroes', () => {
    it('Should not return null', () => {
      const heroes = service.getTopHeroes();
      expect(heroes).not.toBeNull();
    });

    it('Should return a list of four heroes', () => {
      const heroes = service.getTopHeroes();
      expect(heroes.length).toEqual(4);
    });
  });

  describe('updateHero', () => {
    it('Should not return null', () => {
      const hero = service.updateHero(4, 'Ms. Fantastic');
      expect(hero).toBeTruthy();
    });

    it('Should return null if providing bad id', () => {
      const hero = service.updateHero(-1, 'Ms. Fantastic');
      expect(hero).toBeNull();
    });
  });

  describe('getHero', () => {
    it('should not return null', () => {
      const hero = service.getHero(1);
      expect(hero).toBeTruthy();
    });

    it('should return null', () => {
      const hero = service.getHero(-1);
      expect(hero).toBeNull();
    });
  });
});
