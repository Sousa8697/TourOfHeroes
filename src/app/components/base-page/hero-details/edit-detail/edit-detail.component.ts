import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from 'src/app/interfaces/IHero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'],
})
export class EditDetailComponent implements OnInit {
  hero: IHero | null = null;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.hero = this.heroService.getHero(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }

  saveAndClose(): void {
    if (this.hero) {
      this.hero = this.heroService.updateHero(this.hero.id, this.hero.name);
    }
    this.location.back();
  }
}
