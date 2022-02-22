import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/interfaces/IHero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
  providers: [HeroService],
})
export class HeroesListComponent implements OnInit {
  heroes: IHero[] = [];
  miniDetailVisible: boolean = false;
  selectedHero: IHero | null = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

  setMiniDetailVisible(heroId: number) {
    this.miniDetailVisible = true;
    this.selectedHero = this.heroService.getHero(heroId);
  }
}
