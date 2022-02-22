import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css'],
})
export class BasePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
