import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {
    Router, Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Injectable()
export class HeroDetailResolveService implements Resolve<Hero> {
    constructor(private heroService: HeroService, private router: Router) { }
    
    resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
        let id = +route.params['id'];
        return this.heroService.getHero(id).then(hero => {
            if (hero) {
                return hero;
            } else { // id not found
                this.router.navigate(['/dashboard']);
                return false;
            }
        });
    }
}
