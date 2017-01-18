import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {
    Router, Resolve
} from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Injectable()
export class DashboardResolveService implements Resolve<Hero> {

    constructor(private heroService: HeroService, private router: Router) { }
    
    resolve(): Observable<any>|Promise<any>|any {
        return this.heroService.getHeroes()
        .then(heroes => {
            return heroes;
        });
    }

}
