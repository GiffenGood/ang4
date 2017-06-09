import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  alter : any;
  @Output() public deleteRequest = new EventEmitter<Hero>();
  @Input() hero: Hero = null;
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  doDelete() {
    console.log('before emit', this.alter);
    this.deleteRequest.emit(this.hero);
  }

  get diagnostic() { return JSON.stringify(this.hero); }
}