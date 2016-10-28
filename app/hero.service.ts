import { Injectable } from '@angular/core';

// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

import * as Dookie from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Dookie.Hero[]> {
  return Promise.resolve(Dookie.HEROES);
}
}