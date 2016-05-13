System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var ReadBoardService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ReadBoardService = (function () {
                function ReadBoardService(http) {
                    this.http = http;
                    this._storyUrl = location.origin + '/homeData.json';
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
            })();
            exports_1("ReadBoardService", ReadBoardService);
        }
    }
});
