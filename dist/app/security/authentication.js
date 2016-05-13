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
var core_1 = require('angular2/core');
var Authentication = (function () {
    function Authentication() {
        console.info('Auth Constructor ' + this.isLoggedIn);
    }
    Authentication = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Authentication);
    return Authentication;
}());
exports.Authentication = Authentication;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5L2F1dGhlbnRpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFJSTtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFQTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBUWIscUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHNCQUFjLGlCQU8xQixDQUFBIiwiZmlsZSI6InNlY3VyaXR5L2F1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uIHtcblx0dXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgY29uc29sZS5pbmZvKCdBdXRoIENvbnN0cnVjdG9yICcrdGhpcy5pc0xvZ2dlZEluKTsgXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
