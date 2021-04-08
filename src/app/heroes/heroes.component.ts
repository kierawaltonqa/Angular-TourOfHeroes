import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
// component is a decorator function that specifies angular metadata for the component
// three metadata properties
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  // oninit is a good place to put initialisation logic
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this was used before observables replaces the code
    // this.heroes = this.heroService.getHeroes();

    // Observable.subscribe()
    // this version waits for the observable to emit the array of heroes
    // the subscribe method passes the emitted array to the callback, which
    // sets the components heroes properties
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
