import { HeroService } from './hero.service';
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    providers : [HeroService],
    template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
    <router-outlet></router-outlet>
  `
  ,styleUrls : ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    constructor (){
      console.log("I am the app!")
    }
}