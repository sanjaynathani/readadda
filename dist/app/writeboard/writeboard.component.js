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
const authentication_service_1 = require('../security/authentication.service');
let WriteBoardComponent = class WriteBoardComponent {
    constructor() {
    }
    ngOnInit() {
        console.info('Loading WriteBoard');
        //nicEditors.allTextAreas();
        CKEDITOR.replace('editor');
    }
};
WriteBoardComponent = __decorate([
    core_1.Component({
        selector: 'writeboard',
        template: `
    <div style="width: 100%;" >
        <form id="loginForm">
            <h3><strong>Write your story</strong></h3>
            <div class="form-group">
                <label for="topicTitle">Title:</label>
                <input type="text" class="form-control" id="topicTitle" required/>
            </div>

            <div id="editor"></div>    

            <div class="form-group">
                <label for="topicSearchTags">Search Tags:</label>
                <textarea class="form-control" id="topicSearchTags" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="float: right;">Publish</button>
        </form>
    </div>
  `
    }),
    router_1.CanActivate(() => authentication_service_1.isLoggedIn()), 
    __metadata('design:paramtypes', [])
], WriteBoardComponent);
exports.WriteBoardComponent = WriteBoardComponent;
