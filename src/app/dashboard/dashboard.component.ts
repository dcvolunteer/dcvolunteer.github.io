import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { heroes: Hero[] }) => {
        this.heroes = data.heroes;
      });
  }

}
