import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Pivomatico' },
      { id: 12, name: 'Guacamole Man' },
      { id: 13, name: 'Mexorcista' },
      { id: 14, name: 'NoSuperman' },
      { id: 15, name: 'YesSuperman' },
      { id: 16, name: 'NoVillianMan (villan)' },
      { id: 17, name: 'Adéla Luthor' },
      { id: 18, name: 'BigProblem' },
      { id: 19, name: 'NoProblem' },
      { id: 20, name: 'Batman' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (10).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}