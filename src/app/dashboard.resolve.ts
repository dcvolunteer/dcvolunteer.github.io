import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Injectable()
export class DashboardResolve implements Resolve<any> {

    constructor(private heroService: HeroService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.heroService.getHeroes()
            .then(heroes => {
                return heroes;
            });
    }

}
