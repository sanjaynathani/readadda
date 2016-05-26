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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('angular2/core');
const router_1 = require('angular2/router');
const authentication_1 = require('../security/authentication');
let LoggedInRouterOutlet = class LoggedInRouterOutlet extends router_1.RouterOutlet {
    constructor(_elementRef, _loader, _parentRouter, nameAttr, authentication) {
        super(_elementRef, _loader, _parentRouter, nameAttr);
        this.authentication = authentication;
        console.log("Secure Router Outlet Constructor");
        this.parentRouter = _parentRouter;
        this.publicRoutes = [
            'readboard', 'storyboard', 'authentication'
        ];
    }
    activate(instruction) {
        if (this._canActivate(instruction.urlPath)) {
            return super.activate(instruction);
        }
        this.parentRouter.navigate(['Authentication']);
    }
    _canActivate(url) {
        //console.log(url.substring(0, url.indexOf('/')));
        if (url.indexOf('/') !== -1) {
            url = url.substring(0, url.indexOf('/'));
        }
        return this.publicRoutes.indexOf(url) !== -1
            || this.authentication.isLoggedIn;
    }
};
LoggedInRouterOutlet = __decorate([
    core_1.Directive({
        selector: 'router-outlet'
    }),
    __param(3, core_1.Attribute('name')), 
    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, authentication_1.Authentication])
], LoggedInRouterOutlet);
exports.LoggedInRouterOutlet = LoggedInRouterOutlet;
