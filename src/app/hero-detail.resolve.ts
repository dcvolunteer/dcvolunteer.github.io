import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Injectable()
export class HeroDetailResolve implements Resolve<any> {

    constructor(private heroService: HeroService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot) {
        let id = route.params['urlFriendlyId'];


        return this.heroService.getHeroByUrlFriendlyId(id).then(hero => {
            if (hero) {
                return hero;
            } else { // id not found
                this.router.navigate(['/opportunities']);
                return false;
            }
        });
    }

}
