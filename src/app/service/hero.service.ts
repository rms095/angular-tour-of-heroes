import { Injectable } from '@angular/core';
import {Hero} from "../model/Hero";
import {HEROES} from "../mock-data/heroes-modk-data";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";
import {MessagesService} from "./messages.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService : fetched Heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

