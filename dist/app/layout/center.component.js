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
const secured_directive_1 = require('../security/secured.directive');
let CenterComponent = class CenterComponent {
    ngOnInit() {
        console.info('Loading Center');
    }
};
CenterComponent = __decorate([
    core_1.Component({
        selector: 'ra-center',
        template: `
    <div style="padding-top: 51px; margin-left: 10%; margin-right: 10%;">
    <router-outlet></router-outlet>
    </div>
  `,
        directives: [secured_directive_1.LoggedInRouterOutlet],
    }), 
    __metadata('design:paramtypes', [])
], CenterComponent);
exports.CenterComponent = CenterComponent;
