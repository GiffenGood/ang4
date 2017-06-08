import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
