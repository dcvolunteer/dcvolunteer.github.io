import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Title } from '@angular/platform-browser';
import {SeoService} from '../common/seo.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    
    this.route.data
      .subscribe((data: { hero: Hero }) => {
        this.hero = data.hero;
      });

    this.titleService.setTitle('D.C. Volunteer :: ' + this.hero.name);
    this.seoService.setMetaDescription(
      'D.C. Volunteer opportunity: ' +
      this.hero.name +'. ' +
      this.hero.lead);
  }

  ngAfterViewInit() {
    $('#bulletPointCards').foundation();

    // Re-initialize equalizer heights when the device rotates.
    window.addEventListener("orientationchange", function () {      
      Foundation.reInit(['equalizer']);
    }, false);
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
