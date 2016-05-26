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
let StoryBoardComponent = class StoryBoardComponent {
    constructor(params) {
        this.storyId = params.get('storyId');
    }
    ngOnInit() {
        console.info('Loading StoryBoard');
    }
};
StoryBoardComponent = __decorate([
    core_1.Component({
        selector: 'storyboard',
        template: `
    <div style="margin-top: 5%;">
        <div class="container-fluid">
            Story Board {{storyId}}
        </div>
    </div>
  `
    }), 
    __metadata('design:paramtypes', [router_1.RouteParams])
], StoryBoardComponent);
exports.StoryBoardComponent = StoryBoardComponent;
