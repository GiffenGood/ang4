import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros'

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}