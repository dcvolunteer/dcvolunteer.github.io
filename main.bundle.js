webpackJsonp([0,3],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'app/heroes'; // URL to web api
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) {
            return heroes.find(function (hero) { return hero.id === id; });
        });
    };
    HeroService.prototype.getHeroByUrlFriendlyId = function (urlFriendlyId) {
        return this.getHeroes()
            .then(function (heroes) {
            return heroes.find(function (hero) { return hero.urlFriendlyId === urlFriendlyId; });
        });
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HeroService);
    return HeroService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/hero.service.js.map

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardResolve = (function () {
    function DashboardResolve(heroService) {
        this.heroService = heroService;
    }
    DashboardResolve.prototype.resolve = function (route) {
        return this.heroService.getHeroes()
            .then(function (heroes) {
            return heroes;
        });
    };
    DashboardResolve = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__hero_service__["a" /* HeroService */]) === 'function' && _a) || Object])
    ], DashboardResolve);
    return DashboardResolve;
    var _a;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/dashboard.resolve.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.heroes = data.heroes;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(671),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/dashboard.component.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroDetailResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroDetailResolve = (function () {
    function HeroDetailResolve(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroDetailResolve.prototype.resolve = function (route) {
        var _this = this;
        var id = route.params['urlFriendlyId'];
        return this.heroService.getHeroByUrlFriendlyId(id).then(function (hero) {
            if (hero) {
                return hero;
            }
            else {
                _this.router.navigate(['/opportunities']);
                return false;
            }
        });
    };
    HeroDetailResolve = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HeroDetailResolve);
    return HeroDetailResolve;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/hero-detail.resolve.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_service__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeroDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.hero = data.hero;
        });
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__(672),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__hero_service__["a" /* HeroService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _c) || Object])
    ], HeroDetailComponent);
    return HeroDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/hero-detail.component.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            template: __webpack_require__(673),
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/page-not-found.component.js.map

/***/ },

/***/ 390:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(509);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/main.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_detail_hero_detail_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_resolve__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hero_detail_resolve__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    { path: '', redirectTo: '/opportunities', pathMatch: 'full' },
    {
        path: 'opportunities',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        resolve: {
            heroes: __WEBPACK_IMPORTED_MODULE_4__dashboard_resolve__["a" /* DashboardResolve */]
        },
    },
    {
        path: 'opportunities/:urlFriendlyId',
        component: __WEBPACK_IMPORTED_MODULE_3__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
        resolve: {
            hero: __WEBPACK_IMPORTED_MODULE_5__hero_detail_resolve__["a" /* HeroDetailResolve */]
        },
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_resolve__["a" /* DashboardResolve */],
                __WEBPACK_IMPORTED_MODULE_5__hero_detail_resolve__["a" /* HeroDetailResolve */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/app-routing.module.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'D.C. Volunteer';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Scroll to the top of the view when the route changes.
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            document.body.scrollTop = 0;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(670),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/app.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hero_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_resolve__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hero_detail_resolve__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["l" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__["a" /* InMemoryDataService */]),
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__dashboard_resolve__["a" /* DashboardResolve */],
                __WEBPACK_IMPORTED_MODULE_13__hero_detail_resolve__["a" /* HeroDetailResolve */],
                __WEBPACK_IMPORTED_MODULE_11__hero_service__["a" /* HeroService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/app.module.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            {
                id: 11,
                urlFriendlyId: 'habitat-for-humanity',
                name: 'Habitat for Humanity',
                lead: 'Habitat homes offer more than a roof and walls — they offer hope. We want everyone to have a decent place to live.',
                description: 'Habitat Young Professionals of Washington, D.C. (HYPDC) is a network of DC area professionals committed to the vision of a world where everyone has a decent place to live, and to making a difference in the community of Washington, D.C. By joining HYPDC, you\'ll have the opportunity to connect with a diverse group of dedicated, like-minded individuals in the DC area. Each year, HYPDC members make a positive impact in the work of DC Habitat, through fundraising efforts, volunteer days, happy hours, and more.',
                bulletPoints: [
                    'By becoming a member of HYPDC, you\'ll become part of a network of dedicated, service-oriented young professionals in the Washington, D.C. area.',
                    'HYPDC members enjoy the benefits of membership, including social events, exclusive leadership and volunteer opportunities, and member recognition.',
                    '100% of HYPDC membership dues and fundraising profits are used to fund the construction of DC Habitat homes.'
                ],
                url: 'http://www.dchabitat.org/volunteer/young-professionals/join-now/',
                teaserImage: 'habitat-for-humanity-logo',
                photoImage: 'habitat-for-humanity-photo',
            },
            {
                id: 12,
                urlFriendlyId: 'humane-rescue-alliance',
                name: 'Humane Rescue Alliance',
                lead: 'Tenaciously protecting and advocating for the animals in our community and celebrating people\'s love and compassion for them.',
                description: 'The Humane Rescue Alliance operates the District\'s open-access animal adoption center offering an array of dynamic programs and services. Join the team striving to ensure a loving home for every unwanted animal, affordable medical care for every sick or injured animal, an end to animal abuse and cruelty, and stronger bonds between animals and people through education and training.',
                bulletPoints: [
                    'The Humane Rescue Alliance was established by the historic merger of two iconic animal welfare organizations: the Washington Humane Society (WHS) and the Washington Animal Rescue League (WARL).',
                    'The Humane Rescue Alliance now provides area residents with a single destination for animal-related needs, whether it is a search for a new companion to join their family, financial assistance with veterinary care or pet food, assistance with behavioral problems, vaccination or spay/neuter services, or help from officers for a lost, injured, or abused animal.',
                    'We hope to serve as a model for other animal welfare organizations and to create a community where there is a loving home for every unwanted animal, affordable medical care for every sick and injured animal, an end to animal abuse and cruelty, and stronger bonds between animals and people through education and training.'
                ],
                url: 'http://www.humanerescuealliance.org/',
                teaserImage: 'humane-rescue-alliance',
                photoImage: 'humane-rescue-alliance-photo',
            },
            {
                id: 13,
                urlFriendlyId: 'national-park-service',
                name: 'National Park Service',
                lead: 'Taking care of the national parks and helping Americans take care of their communities is a job we love.',
                description: 'The National Park Service has been entrusted with the care of our national parks. With the help of volunteers, it safeguards these special places and shares their stories with more than 275 million visitors annually.',
                bulletPoints: [
                    'The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations.',
                    'Looking for a meaningful internship or someone with some extra time who\'d like to volunteer? You can find volunteer and internship opportunities to suit your needs and interests.',
                    'Make a difference by bringing your unique experience, background, and perspective to our work.'
                ],
                url: 'https://www.volunteer.gov/results.cfm?states=DC',
                teaserImage: 'national-park-service',
                photoImage: 'national-park-service-photo',
            },
            {
                id: 14,
                urlFriendlyId: 'dc-central-kitchen',
                name: 'D.C. Central Kitchen',
                lead: 'Every day, dedicated volunteers help us transform wasted food into balanced meals for our community.',
                description: 'DC Central Kitchen was founded in 1989 by young nightclub manager named Robert Egger. Frustrated and challenged by his volunteer experiences with traditional charitable responses to hunger and homelessness, Robert pioneered a new model aimed at liberating people from the conditions of poverty. Robert\'s idea for a ‘central kitchen\' involved picking up wasted food (which people said was unwise), turning it into balanced meals for shelters and nonprofits (which people said was unsustainable), and using that process to train jobless adults in the culinary arts (which people said was impossible).',
                bulletPoints: [
                    'We believe we will never feed our way out of hunger, because hunger is a symptom of the deeper problem of poverty.',
                    'We believe in the transformative power of a job, and that everyone deserves the chance to share in the dignity of work while contributing to our community.',
                    'We believe in building a more equitable food system that ensures access to healthy, dignified food and economic opportunity for all.'
                ],
                url: 'https://dccentralkitchen.org/',
                teaserImage: 'dcck',
                photoImage: 'dcck-photo',
            },
            {
                id: 15,
                urlFriendlyId: 'capital-area-food-bank',
                name: 'Capital Area Food Bank',
                lead: 'Working to solve hunger and its companion problems: chronic undernutrition, heart disease, and obesity.',
                description: 'The Capital Area Food Bank is the largest organization in the Washington metro area working to solve hunger and its companion problems: chronic undernutrition, heart disease, and obesity. We provide meals to 12 percent of the Washington metro area population – that\'s 540,000 of our region\'s mothers, fathers, sons, daughters, sisters, brothers, and grandparents. We work with our network of 444 food assistance partners to provide food and nutrition education to our neighbors in need.',
                bulletPoints: [
                    'Hunger: It\'s here, right where we live. It affects every single neighborhood in our region. It impacts people of every age, race, religion, and ethnicity.',
                    'Hunger robs children of a chance to learn, undermines health, and makes getting and holding good jobs hard.',
                    'By partnering with 444 community organizations in DC, MD, and VA, as well as delivering food directly into hard to reach areas, the CAFB is helping 540,000 people each year get access to good, healthy food.'
                ],
                url: 'https://www.capitalareafoodbank.org/',
                teaserImage: 'capitalfood',
                photoImage: 'capitalfood-photo',
            },
            {
                id: 16,
                urlFriendlyId: 'coderdojo-nova',
                name: 'CoderDojo NOVA',
                lead: 'CoderDojo is a movement oriented around running free, not-for-profit coding clubs and regular sesssions for young people.',
                description: 'At CoderDojo NOVA (“CoderNova”), young people learn how to code, develop websites, apps, programs, games and more. CoderNova is set up, run by and taught at by volunteers. We organize tours of technology companies, bring in guest speakers to talk about their career and what they do, and organize events. CoderNova makes development and learning to code a fun, sociable, and cool experience. CoderNova also puts a strong emphasis on open source and free software, and has a strong network of members and volunteers globally.',
                bulletPoints: [
                    'Thomas Debass (@debass) and Gelila Teshome (@GelilaAmare) co-founded CoderDojo Nova in 2013, driven by their desire to expose their three daughters the universal language of the future: coding.',
                    'We are a program of the 501(c)3 non-profit NVCC Educational Foundation; and we are an independent chapter, unaffiliated with any other organizations such as CoderDojo DC or CoderDojo USA.',
                    'Our coding sessions will work proactively to eliminate gender and socioeconomic barriers to computer science by providing a no-cost way for young people to experience programming early—and have fun doing it! Most sessions require no prior knowledge!'
                ],
                url: 'http://www.coderdojonova.co/',
                teaserImage: 'coderdojo',
                photoImage: 'coderdojo-photo',
            }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/in-memory-data.service.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/environment.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Chris/Desktop/dc-volunteer/src/polyfills.js.map

/***/ },

/***/ 667:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "<nav>\r\n    <div class=\"top-bar\" id=\"realEstateMenu\">\r\n        <div class=\"row\">\r\n            <div class=\"small-12 columns text-white\">\r\n                <div class=\"top-bar-left\">\r\n                    <ul class=\"menu accordion-menu\" data-responsive-menu=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                        <li class=\"menu-text\" role=\"menuitem\">\r\n                            <a routerLink=\"/\" \r\n                                routerLinkActive=\"active\">\r\n                                D.C. Volunteer\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer>\r\n    <div class=\"row footer\">\r\n        <div class=\"small-12 medium-4 large-4 columns\">\r\n            D.C. Volunteer brings you the best volunteer organizations and opportunities in the Washington, D.C. area. From helping families\r\n            achieve the dream of home ownership, to feeding the hungry, to helping animals, there's something for everyone.\r\n        </div>\r\n\r\n        <div class=\"small-12 medium-4 large-4 columns\">\r\n            <ul class=\"fa-ul\">\r\n                <li>\r\n                    <i class=\"fa-li fa fa-envelope-o fa-2x\"></i>\r\n                    <p class=\"margin-left-xs-small-only\">                        \r\n                        <a href=\"http://shermandigital.com/contact/\">Contact us</a>\r\n                        to list your organization or feature an upcoming event\r\n                    </p>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"small-12 medium-4 large-4 columns\">\r\n            <div class=\"menu-container\">\r\n                <a routerLink=\"/\" routerLinkActive=\"active\">\r\n                    <h5>\r\n                        Home\r\n                    </h5>\r\n                </a>\r\n                <span>Best volunteer opportunities in D.C.</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row copyright\">\r\n        <div class=\"small-12 medium-6 large-6 columns\">\r\n            &copy; 2017 D.C. Volunteer, All Rights Reserved.<br>\r\n        </div>\r\n        <div class=\"medium-6 large-6 columns show-for-medium text-right\">\r\n            Developed by <a href=\"http://shermandigital.com/\">Chris Sherman</a>\r\n        </div>\r\n        <div class=\"small-12 columns show-for-small-only\">\r\n            <br> Developed by <a href=\"http://shermandigital.com/\">Chris Sherman</a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<div class=\"row content-group\">\r\n    <div class=\"medium-6 large-6 columns\">\r\n        <h1 class=\"h2\">\r\n            Best Volunteer Opportunities in Washington, D.C.\r\n        </h1>\r\n\r\n        <p class=\"subheader\">\r\n            Below you'll find the best volunteer organizations in and around the D.C.\r\n            area. From helping families achieve the dream of home ownership, to feeding the\r\n            hungry, to helping animals, there's something for everyone.\r\n        </p>\r\n\r\n        <p class=\"subheader\">\r\n            Volunteering provides a sense of purpose and an outlet for helping others. \r\n            You'll help strengthen your community while building new skills.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"show-for-medium-up medium-6 large-offset-1 large-5 columns\">\r\n\r\n        <div class=\"img-container ratio-feature-image\">\r\n            <a href=\"https://www.capitalareafoodbank.org/blue-jeans-ball/\" target=\"_blank\">\r\n                <img src=\"/assets/images/baa1831c-27bb-4d63-806a-7fb808ddb3f7.jpg\"\r\n                    alt=\"Featured volunteer event\" class=\"thumbnail\">\r\n\r\n                <p class=\"caption-container\">\r\n                    <small class=\"caption-content\">\r\n                        Featured event\r\n                    </small>\r\n                </p>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"medium-5 large-3 columns\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row column\">\r\n    <hr>\r\n</div>\r\n\r\n<div class=\"row column\">\r\n    <p class=\"lead\">\r\n        Top Opportunities\r\n    </p>\r\n</div>\r\n\r\n<div class=\"row small-up-1 medium-up-2 large-up-3\">\r\n    <div *ngFor=\"let hero of heroes\" class=\"column\">\r\n        <a [routerLink]=\"['/opportunities', hero.urlFriendlyId]\">\r\n            <div class=\"callout\">\r\n                <h2 class=\"h5\" [textContent]=\"hero.name\"></h2>\r\n\r\n                <div class=\"img-container ratio-1-1\">\r\n                    <img src=\"/assets/images/{{hero.teaserImage}}@large.jpg\" \r\n                        [alt]=\"hero.name\">\r\n                </div>\r\n\r\n                <p class=\"content-group\" [textContent]=\"hero.lead\"></p>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<section *ngIf=\"hero\">\r\n  <div class=\"callout large\">\r\n    <div class=\"row column text-center\">\r\n      <h1>\r\n        {{hero.name}}  \r\n      </h1>\r\n      \r\n      <p class=\"lead\">\r\n        {{hero.lead}}\r\n      </p>\r\n      \r\n      <a [href]=\"hero.url\" target=\"_blank\" class=\"button\">\r\n        {{hero.name}}\r\n        Website\r\n        <i class=\"fa fa-external-link\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row content-group\">\r\n\r\n    <div class=\"show-for-small-only small-12 columns\">\r\n        <img src=\"/assets/images/{{hero.photoImage}}.jpg\" \r\n            alt=\"Volunteer photo\"\r\n            class=\"thumbnail\">\r\n    </div>\r\n\r\n    <div class=\"medium-6 columns\">\r\n      <h2>\r\n        About\r\n        {{hero.name}}\r\n      </h2>\r\n\r\n      <p>\r\n        {{hero.description}}\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"show-for-medium medium-6 large-offset-1 large-5 columns\">\r\n        <img src=\"/assets/images/{{hero.photoImage}}.jpg\" \r\n            alt=\"Volunteer photo\"\r\n            class=\"thumbnail\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row content-group\">\r\n    <div *ngFor=\"let bulletPoint of hero.bulletPoints\" class=\"medium-4 columns\">\r\n      <p>{{bulletPoint}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row content-group-lg\">\r\n    <div class=\"small-12 columns\">\r\n      <button type=\"button\" class=\"button\" (click)=\"goBack()\">Back</button>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<div class=\"row content-group\">\r\n    <div class=\"large-12 columns\">\r\n        <h1 class=\"h2\">\r\n            Page not found\r\n        </h1>\r\n\r\n        <p>\r\n            We couldn't find what you're looking for. Please review your request.\r\n        </p>\r\n    </div>\r\n</div>"

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ }

},[697]);
//# sourceMappingURL=main.bundle.map