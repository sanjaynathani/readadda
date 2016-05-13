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
var layout_component_1 = require('./layout/layout.component');
//import { ReadBoardComponent } from './readboard/readboard.component';
//import { WriteBoardComponent } from './writeboard/writeboard.component';
var router_1 = require('angular2/router');
var main_routes_1 = require('./route/main_routes');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.constrctor = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        console.info('Loading ReadAdda');
        //this._authenticationService.isLoggedIn();
        //this.loggedIn();
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
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCx1RUFBdUU7QUFDdkUsMEVBQTBFO0FBQzFFLHVCQUFpRSxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25GLDRCQUEyQixxQkFBcUIsQ0FBQyxDQUFBO0FBNEJqRDtJQUFBO0lBV0EsQ0FBQztJQVZDLGlDQUFVLEdBQVY7SUFFQSxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqQywyQ0FBMkM7UUFDM0Msa0JBQWtCO0lBQ3RCLENBQUM7SUFsQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGtDQUFrQztZQUM1QyxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDBCQUFpQixDQUFDO1lBQ2hELFNBQVMsRUFBRTtnQkFDUCx5QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBRUQsb0JBQVcsQ0FBQyx3QkFBVSxDQUFDOztvQkFBQTtJQTJCeEIsbUJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLG9CQUFZLGVBV3hCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudCc7XG4vL2ltcG9ydCB7IFJlYWRCb2FyZENvbXBvbmVudCB9IGZyb20gJy4vcmVhZGJvYXJkL3JlYWRib2FyZC5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBXcml0ZUJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi93cml0ZWJvYXJkL3dyaXRlYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBNYWluUm91dGVzIH0gZnJvbSAnLi9yb3V0ZS9tYWluX3JvdXRlcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyZWFkLWFkZGEnLFxuICAgIHRlbXBsYXRlOiAnPHJhLWxheW91dD5Mb2FkaW5nLi48L3JhLWxheW91dD4nLFxuICAgIGRpcmVjdGl2ZXM6IFtMYXlvdXRDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUk9VVEVSX1BST1ZJREVSU1xuICAgIF1cbn0pXG5cbkBSb3V0ZUNvbmZpZyhNYWluUm91dGVzKVxuLypAUm91dGVDb25maWcoW1xuICB7XG4gICAgcGF0aDogJy9yZWFkYm9hcmQnLFxuICAgIG5hbWU6ICdSZWFkQm9hcmQnLFxuICAgIGNvbXBvbmVudDogUmVhZEJvYXJkQ29tcG9uZW50LFxuICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICB9LFxuICB7XG4gICAgcGF0aDogJy93cml0ZWJvYXJkJyxcbiAgICBuYW1lOiAnV3JpdGVCb2FyZCcsXG4gICAgY29tcG9uZW50OiBXcml0ZUJvYXJkQ29tcG9uZW50XG4gIH1cbl0pKi9cblxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgXG4gIGNvbnN0cmN0b3IoKXtcbiAgICBcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0xvYWRpbmcgUmVhZEFkZGEnKTtcbiAgICAgIC8vdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICAgIC8vdGhpcy5sb2dnZWRJbigpO1xuICB9XG4gIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
