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
const readboard_service_1 = require('./readboard.service');
const router_1 = require('angular2/router');
let ReadBoardComponent = class ReadBoardComponent {
    constructor(_readboardService, router) {
        this._readboardService = _readboardService;
        this.router = router;
        this.showAdvanceSearch = false;
        this.stories = [];
    }
    ngOnInit() {
        console.info('Loading ReadBoard');
        this.getStories();
    }
    toggleAdvanceSearch() {
        this.showAdvanceSearch = !this.showAdvanceSearch;
    }
    getStories() {
        console.info('Loading getStories');
        this._readboardService.getStories().subscribe(stories => this.stories = this.stories.concat(stories), error => this.errorMessage = error);
    }
    onScroll() {
        var windowHeight = "innerHeight" in window ? window.innerHeight : document.getElementById('readList').offsetHeight;
        var body = document.body, html = document.getElementById('readList');
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.getStories();
        }
    }
    openStory(storyId) {
        this.router.navigate(['StoryBoard', { 'storyId': storyId }]);
    }
};
ReadBoardComponent = __decorate([
    core_1.Component({
        selector: 'readboard',
        template: `

    <div class="affix" style="width: 80.1%; background-color: white; border-bottom-style: ridge; border-bottom-width: 1;">
        <form id="Form" style="padding-top: 8px; width: 109%;">
            <div class="input-group" >
                <input type="text" class="form-control" placeholder="Search for...">
                <div class="input-group-btn">
                    <button class="btn btn-default" type="button">Go!</button>
                </div>
                <div style="float: left;" data-toggle="tooltip" title="More filters!">
                    &nbsp;<span class="glyphicon glyphicon-menu-hamburger" (click)="toggleAdvanceSearch()" style="font-size: 20px; cursor: pointer;"></span>
                </div>
            </div>

            <div [hidden]=!showAdvanceSearch>
                <div>
                    Advance search options!
                </div> 
            </div>
        </form>
    </div>


    <div id="readList" style="margin-top: 50px;" (window:scroll)="onScroll()">
        <div style="margin-bottom: 5px;" class="panel panel-primary" *ngFor="#story of stories">
             <div class="panel-heading" style="height: 30px; padding-top: 9px;">
                <span style="font-family: sans-serif; font-size: small; font-weight: bold; cursor: pointer;" (click)="openStory(story.storyId)">{{story.title}}</span>
                <span style="float: right; font-family: sans-serif; font-size: smaller;">{{story.createdDate}}</span>
            </div>
            <div class="panel-body" style="font-family: sans-serif; font-size: small; font-weight: bold; cursor: pointer;" (click)="openStory(story.storyId)">{{story.storyShortDescription}}</div>
            <div class="panel-footer" style="height: 20px; padding-top: 0">
                <span style="font-family: sans-serif; font-size: small; font-weight: bold;">{{story.likes}}</span>
                <span style="font-family: sans-serif; font-size: small; font-weight: bold">{{story.disLikes}}</span>
            </div>
        </div>
    </div>
  `,
        providers: [readboard_service_1.ReadBoardService]
    }), 
    __metadata('design:paramtypes', [readboard_service_1.ReadBoardService, router_1.Router])
], ReadBoardComponent);
exports.ReadBoardComponent = ReadBoardComponent;
