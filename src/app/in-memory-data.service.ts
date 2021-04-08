import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', age: 23 },
      { id: 12, name: 'Narco', age: 44 },
      { id: 13, name: 'Bombasto', age: 30 },
      { id: 14, name: 'Celeritas', age: 28 },
      { id: 15, name: 'Magneta', age: 25 },
      { id: 16, name: 'RubberMan', age: 29 },
      { id: 17, name: 'Dynama', age: 20 },
      { id: 18, name: 'Dr IQ', age: 56 },
      { id: 19, name: 'Magma', age: 35 },
      { id: 20, name: 'Tornado', age: 22 }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}