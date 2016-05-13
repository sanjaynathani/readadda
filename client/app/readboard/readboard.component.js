System.register(['angular2/core', './readboard.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, readboard_service_1;
    var ReadBoardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (readboard_service_1_1) {
                readboard_service_1 = readboard_service_1_1;
            }],
        execute: function() {
            ReadBoardComponent = (function () {
                function ReadBoardComponent(_readboardService) {
                    this._readboardService = _readboardService;
                    this.showAdvanceSearch = false;
                    this.stories = [];
                }
                ReadBoardComponent.prototype.ngOnInit = function () {
                    console.info('Loading ReadBoard');
                    this.getStories();
                };
                ReadBoardComponent.prototype.toggleAdvanceSearch = function () {
                    this.showAdvanceSearch = !this.showAdvanceSearch;
                };
                ReadBoardComponent.prototype.getStories = function () {
                    var _this = this;
                    console.info('Loading getStories');
                    this._readboardService.getStories().subscribe(function (stories) { return _this.stories = _this.stories.concat(stories); }, function (error) { return _this.errorMessage = error; });
                };
                ReadBoardComponent.prototype.onScroll = function () {
                    var windowHeight = "innerHeight" in window ? window.innerHeight : document.getElementById('readList').offsetHeight;
                    var body = document.body, html = document.getElementById('readList');
                    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                    var windowBottom = windowHeight + window.pageYOffset;
                    if (windowBottom >= docHeight) {
                        this.getStories();
                    }
                };
                ReadBoardComponent = __decorate([
                    core_1.Component({
                        selector: 'readboard',
                        templateUrl: 'app/readboard/readboard.component.html',
                        providers: [readboard_service_1.ReadBoardService]
                    }), 
                    __metadata('design:paramtypes', [readboard_service_1.ReadBoardService])
                ], ReadBoardComponent);
                return ReadBoardComponent;
            })();
            exports_1("ReadBoardComponent", ReadBoardComponent);
        }
    }
});
