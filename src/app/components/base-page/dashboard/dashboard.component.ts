import { Component, OnInit } from '@angular/core';
import { IHero } from 'src/app/interfaces/IHero';
import { HeroService } from '../../../services/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getTopHeroes();
  }
}
