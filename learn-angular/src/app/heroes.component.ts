import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
})
export class HeroesComponent implements OnInit{
  	heroes: Hero[];
  	selectedHero: Hero;
    constructor(
      private heroService: HeroService,
      private router: Router
     ){}
    gotoDetail(): void{
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
    getHeroes(): void{
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
  	ngOnInit(): void{
  		this.getHeroes();
  	}
  	onSelect(hero: Hero): void{
  		this.selectedHero = hero;
      console.log(this.selectedHero);
  	}
}