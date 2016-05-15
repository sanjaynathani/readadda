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
var readboard_service_1 = require('./readboard.service');
var ReadBoardComponent = (function () {
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
            template: "\n\n    <div class=\"affix\" style=\"margin-top: -9px; margin-left: -10%; background-color: white; border-bottom-style: ridge; border-bottom-width: 1;\">\n        <form id=\"Form\" style=\"padding-top: 8px; padding-left: 9%;\">\n            <div class=\"input-group\" >\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                <div class=\"input-group-btn\">\n                    <button class=\"btn btn-default\" type=\"button\">Go!</button>\n                </div>\n                <div style=\"float: left;\" data-toggle=\"tooltip\" title=\"More filters!\">\n                    &nbsp;<span class=\"glyphicon glyphicon-menu-hamburger\" (click)=\"toggleAdvanceSearch()\" style=\"font-size: 20px; cursor: pointer;\"></span>\n                </div>\n            </div>\n\n            <div [hidden]=!showAdvanceSearch>\n                <div>\n                    Advance search options!\n                </div> \n            </div>\n        </form>\n    </div>\n\n\n    <div id=\"readList\" style=\"margin-top: 50px;\" (window:scroll)=\"onScroll()\">\n        <div style=\"margin-bottom: 5px;\" class=\"panel panel-primary\" *ngFor=\"#story of stories\">\n             <div class=\"panel-heading\" style=\"height: 30px; padding-top: 9px;\">\n                <span style=\"font-family: sans-serif; font-size: small; font-weight: bold\">{{story.title}}</span>\n                <span style=\"float: right; font-family: sans-serif; font-size: smaller;\">{{story.createdDate}}</span>\n            </div>\n            <div class=\"panel-body\" style=\"font-family: sans-serif; font-size: small; font-weight: bold\">{{story.storyShortDescription}}</div>\n            <div class=\"panel-footer\" style=\"height: 20px; padding-top: 0\">\n                <span style=\"font-family: sans-serif; font-size: small; font-weight: bold;\">{{story.likes}}</span>\n                <span style=\"font-family: sans-serif; font-size: small; font-weight: bold\">{{story.disLikes}}</span>\n            </div>\n        </div>\n    </div>\n  ",
            providers: [readboard_service_1.ReadBoardService]
        }), 
        __metadata('design:paramtypes', [readboard_service_1.ReadBoardService])
    ], ReadBoardComponent);
    return ReadBoardComponent;
}());
exports.ReadBoardComponent = ReadBoardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRib2FyZC9yZWFkYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUE0Q3ZEO0lBTUUsNEJBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBRnZELHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQUMsRUFBRSxDQUFDO0lBQ2dELENBQUM7SUFFNUQscUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdEQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNuRCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUFBLGlCQUtDO1FBSkcsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQ3pDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBM0MsQ0FBMkMsRUFDdEQsVUFBQSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxZQUFZLEdBQUcsYUFBYSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ25ILElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6SCxJQUFJLFlBQVksR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyRCxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUVILENBQUM7SUEzRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHNoRUFvQ1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUU5QixDQUFDOzswQkFBQTtJQW9DRix5QkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksMEJBQWtCLHFCQW1DOUIsQ0FBQSIsImZpbGUiOiJyZWFkYm9hcmQvcmVhZGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBTdG9yeSB9IGZyb20gJy4vc3RvcnknO1xuaW1wb3J0IHsgUmVhZEJvYXJkU2VydmljZSB9IGZyb20gJy4vcmVhZGJvYXJkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZWFkYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3JlYWRib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1JlYWRCb2FyZFNlcnZpY2VdXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBSZWFkQm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvL3N0b3JpZXM6IFN0b3J5W107XG4gIHNlbGVjdGVkU3Rvcnk6IFN0b3J5O1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgc2hvd0FkdmFuY2VTZWFyY2ggPSBmYWxzZTtcbiAgc3Rvcmllcz1bXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVhZGJvYXJkU2VydmljZTogUmVhZEJvYXJkU2VydmljZSkgeyB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBSZWFkQm9hcmQnKTtcbiAgICAgIHRoaXMuZ2V0U3RvcmllcygpO1xuICB9XG4gIFxuICB0b2dnbGVBZHZhbmNlU2VhcmNoKCkge1xuICAgICAgdGhpcy5zaG93QWR2YW5jZVNlYXJjaD0hdGhpcy5zaG93QWR2YW5jZVNlYXJjaDtcbiAgfVxuICBcbiAgZ2V0U3RvcmllcygpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBnZXRTdG9yaWVzJyk7XG4gICAgICB0aGlzLl9yZWFkYm9hcmRTZXJ2aWNlLmdldFN0b3JpZXMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgc3RvcmllcyA9PiB0aGlzLnN0b3JpZXMgPSB0aGlzLnN0b3JpZXMuY29uY2F0KHN0b3JpZXMpLFxuICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG4gIFxuICBvblNjcm9sbCgpIHtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gXCJpbm5lckhlaWdodFwiIGluIHdpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFkTGlzdCcpLm9mZnNldEhlaWdodDtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHksIGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZExpc3QnKTtcbiAgICB2YXIgZG9jSGVpZ2h0ID0gTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGJvZHkub2Zmc2V0SGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgIGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLm9mZnNldEhlaWdodCk7XG4gICAgdmFyIHdpbmRvd0JvdHRvbSA9IHdpbmRvd0hlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAod2luZG93Qm90dG9tID49IGRvY0hlaWdodCkge1xuICAgICAgICB0aGlzLmdldFN0b3JpZXMoKTtcbiAgICB9XG4gICAgXG4gIH1cbiAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
