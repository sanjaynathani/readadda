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
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var ReadBoardService = (function () {
    function ReadBoardService(http) {
        this.http = http;
        this._storyUrl = location.origin + '/libs/data/homeData.json';
    }
    //private _storyUrl = 'http://localhost:3000/homeData.json';
    ReadBoardService.prototype.getStories = function () {
        console.log(this._storyUrl);
        return this.http.get(this._storyUrl)
            .map(function (res) { return res.json().stories; })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    ReadBoardService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ReadBoardService.prototype.getAppPath = function () {
        console.log('HOST :' + location.origin);
        var pathArray = location.href.split('/');
        var appPath = "/";
        for (var i = 1; i < pathArray.length - 1; i++) {
            appPath += pathArray[i] + "/";
        }
        return appPath;
    };
    ReadBoardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReadBoardService);
    return ReadBoardService;
}());
exports.ReadBoardService = ReadBoardService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRib2FyZC9yZWFkYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3QywyQkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUcvQztJQUNJLDBCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUV0QixjQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBQywwQkFBMEIsQ0FBQztJQUY3QixDQUFDO0lBR25DLDREQUE0RDtJQUU1RCxxQ0FBVSxHQUFWO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBM0IsQ0FBMkIsQ0FBQzthQUN2QyxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDO2FBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNPLHNDQUFXLEdBQW5CLFVBQW9CLEtBQWU7UUFDL0IsbUZBQW1GO1FBQ25GLDRDQUE0QztRQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyxxQ0FBVSxHQUFsQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUE3Qkw7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQThCYix1QkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3Qlksd0JBQWdCLG1CQTZCNUIsQ0FBQSIsImZpbGUiOiJyZWFkYm9hcmQvcmVhZGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0b3J5fSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlYWRCb2FyZFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG4gICAgXG4gICAgcHJpdmF0ZSBfc3RvcnlVcmwgPSBsb2NhdGlvbi5vcmlnaW4rJy9saWJzL2RhdGEvaG9tZURhdGEuanNvbic7XG4gICAgLy9wcml2YXRlIF9zdG9yeVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvaG9tZURhdGEuanNvbic7XG5cbiAgICBnZXRTdG9yaWVzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdG9yeVVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX3N0b3J5VXJsKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPFN0b3J5W10+cmVzLmpzb24oKS5zdG9yaWVzKVxuICAgICAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpIFxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgZXJyb3IgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBnZXRBcHBQYXRoKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSE9TVCA6JyArIGxvY2F0aW9uLm9yaWdpbik7XG4gICAgICAgIHZhciBwYXRoQXJyYXkgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJyk7XG4gICAgICAgIHZhciBhcHBQYXRoID0gXCIvXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcGF0aEFycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgYXBwUGF0aCArPSBwYXRoQXJyYXlbaV0gKyBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXBwUGF0aDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
