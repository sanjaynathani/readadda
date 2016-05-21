"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('angular2/core');
const layout_component_1 = require('./layout/layout.component');
//import { ReadBoardComponent } from './readboard/readboard.component';
//import { WriteBoardComponent } from './writeboard/writeboard.component';
const router_1 = require('angular2/router');
const main_routes_1 = require('./route/main_routes');
let AppComponent = class AppComponent {
    constrctor() {
    }
    ngOnInit() {
        console.info('Loading ReadAdda');
        //this._authenticationService.isLoggedIn();
        //this.loggedIn();
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'read-adda',
        template: '<ra-layout>Loading..</ra-layout>',
        directives: [layout_component_1.LayoutComponent, router_1.ROUTER_DIRECTIVES],
        providers: [
            router_1.ROUTER_PROVIDERS
        ]
    }),
    router_1.RouteConfig(main_routes_1.MainRoutes), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
