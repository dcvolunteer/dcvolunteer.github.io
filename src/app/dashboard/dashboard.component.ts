import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Title } from '@angular/platform-browser';
import {SeoService} from '../common/seo.service';

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
    private titleService: Title,
    private seoService: SeoService
  ) { 
    this.titleService.setTitle('D.C. Volunteer :: Featured Opportunities');
    this.seoService.setMetaDescription('D.C. Volunteer features the best volunteer opportunities in and around the D.C. area. Find organizations that fit your interests, and get involved in your community.');
  }

  ngOnInit(): void {
   
    this.route.data
      .subscribe((data: { heroes: Hero[] }) => {
        this.heroes = data.heroes;
      });
  }

  ngAfterViewInit() {
    $('#opportunityCards').foundation();

    // Re-initialize equalizer heights when the device rotates.
    window.addEventListener("orientationchange", function () {      
      Foundation.reInit(['equalizer']);
    }, false);
  }
}
