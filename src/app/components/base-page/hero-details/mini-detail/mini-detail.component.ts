import { Component, Input, OnInit } from '@angular/core';
import { IHero } from 'src/app/interfaces/IHero';

@Component({
  selector: 'app-mini-detail',
  templateUrl: './mini-detail.component.html',
  styleUrls: ['./mini-detail.component.css'],
})
export class MiniDetailComponent implements OnInit {
  @Input() hero: IHero | null = null;
  constructor() {}

  ngOnInit(): void {}
}
