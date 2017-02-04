import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {SeoService} from '../common/seo.service';

@Component({
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {
  constructor(
    private titleService: Title,
    private seoService: SeoService
  ) { 
    this.titleService.setTitle('D.C. Volunteer :: Page Not Found');
    this.seoService.setMetaDescription('We couldn\'t find the page you\'re looking for.');
  }
}