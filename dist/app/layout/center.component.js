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
var router_1 = require('angular2/router');
var CenterComponent = (function () {
    function CenterComponent() {
    }
    CenterComponent.prototype.ngOnInit = function () {
        console.info('Loading Center');
    };
    CenterComponent = __decorate([
        core_1.Component({
            selector: 'ra-center',
            template: "\n    <div style=\"padding-top: 60px; margin-left: 10%; margin-right: 10%;\">\n    <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], CenterComponent);
    return CenterComponent;
}());
exports.CenterComponent = CenterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9jZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFhcEQ7SUFBQTtJQU1BLENBQUM7SUFKQyxrQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFmSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsb0lBSVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUVoQyxDQUFDOzt1QkFBQTtJQVFGLHNCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSx1QkFBZSxrQkFNM0IsQ0FBQSIsImZpbGUiOiJsYXlvdXQvY2VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhLWNlbnRlcicsXG4gIHRlbXBsYXRlVXJsOiAnY2VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgXG59KVxuXG5leHBvcnQgY2xhc3MgQ2VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBDZW50ZXInKTtcbiAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
