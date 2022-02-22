import { TestBed } from '@angular/core/testing';

import { InMemoryDatabaseService } from './in-memory.service';

describe('InMemoryDatabaseService', () => {
  let service: InMemoryDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have predefined heroes', () => {
    expect(service.heroes).toBeTruthy();
  });

  describe('getAllHeroes', () => {
    it('should not return null', () => {
      const heroes = service.getAllHeroes();
      expect(heroes).not.toBeNull();
    });

    it('should return all heroes in heroes list', () => {
      const heroes = service.getAllHeroes();
      expect(heroes.length).toEqual(service.heroes.length);
    });
  });

  describe('getHero', () => {
    it('should not return null if provided id in list', () => {
      const hero = service.getHero(1);
      expect(hero).not.toBeNull();
    });

    it('should return null if a proper id is not provided', () => {
      const hero = service.getHero(-1);
      expect(hero).toBeNull();
    });

    it('providing id 1 should return iron man', () => {
      const hero = service.getHero(1);
      expect(hero?.name).toEqual('Iron Man');
    });
  });

  describe('updateHero', () => {
    it('should update a hero name if provided', () => {
      const heroName = service.getHero(6)?.name;
      const updatedHero = service.updateHero(6, 'Ms. Fantastic');

      expect(heroName).not.toEqual(updatedHero?.name);
    });

    it('should not return null if providing proper id', () => {
      const updatedHero = service.updateHero(3, 'Ms. Fantastic');

      expect(updatedHero).not.toBeNull();
    });

    it('should return null if wrong id provided', () => {
      const updatedHero = service.updateHero(-1, 'Ms. Fantastic');
      expect(updatedHero).toBeNull();
    });
  });
});
