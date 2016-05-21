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
const router_1 = require('angular2/router');
const header_component_1 = require('./header.component');
const center_component_1 = require('./center.component');
let LayoutComponent = class LayoutComponent {
    ngOnInit() {
        console.info('Loading Layout');
    }
};
LayoutComponent = __decorate([
    core_1.Component({
        selector: 'ra-layout',
        template: '<ra-header>Loading..</ra-header><ra-center>Loading...</ra-center>',
        directives: [header_component_1.HeaderComponent, center_component_1.CenterComponent, router_1.ROUTER_DIRECTIVES],
        providers: [
            router_1.ROUTER_PROVIDERS
        ]
    }), 
    __metadata('design:paramtypes', [])
], LayoutComponent);
exports.LayoutComponent = LayoutComponent;
