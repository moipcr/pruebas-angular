import { Hero } from 'src/VO/HeroVO';
import { HeroService } from './../servicios/heroes.servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public cadena: String;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getJSON();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getJSON(): void {
     this.heroService.getJSON().subscribe(cadena => this.cadena = JSON.stringify(cadena));
  }


}
