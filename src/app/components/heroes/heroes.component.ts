import { Component, OnInit } from '@angular/core';
import {Hero} from "../../model/Hero";
import {HEROES} from "../../mock-data/heroes-modk-data";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelectHero(hero): void {
    this.selectedHero = hero;
  }

}
