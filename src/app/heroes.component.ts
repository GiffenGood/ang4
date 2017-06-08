import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
      private heroService: HeroService, 
      private router: Router) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then((data) => {
      this.heroes = data;
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
