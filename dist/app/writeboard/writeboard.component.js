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
var WriteBoardComponent = (function () {
    function WriteBoardComponent() {
    }
    WriteBoardComponent.prototype.ngOnInit = function () {
        console.info('Loading WriteBoard');
        //nicEditors.allTextAreas();
        CKEDITOR.replace('editor');
    };
    WriteBoardComponent = __decorate([
        core_1.Component({
            selector: 'writeboard',
            template: "\n    <div style=\"margin-top: 3%; width: 100%; height: 900px;\" >\n        <!--<textarea name=\"area3\" style=\"width: inherit; height: inherit;\">\n        \n        </textarea>-->\n        <div id=\"editor\">\n            <h1>Hello world!</h1>\n            <p>I'm an instance of <a href=\"http://ckeditor.com\">CKEditor</a>.</p>\n        </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], WriteBoardComponent);
    return WriteBoardComponent;
}());
exports.WriteBoardComponent = WriteBoardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlYm9hcmQvd3JpdGVib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQW1CbEQ7SUFBQTtJQVFBLENBQUM7SUFOQyxzQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25DLDRCQUE0QjtRQUM1QixRQUFRLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBRSxDQUFDO0lBQ2pDLENBQUM7SUFyQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLDZXQVVUO1NBRUYsQ0FBQzs7MkJBQUE7SUFTRiwwQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksMkJBQW1CLHNCQVEvQixDQUFBIiwiZmlsZSI6IndyaXRlYm9hcmQvd3JpdGVib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBuaWNFZGl0b3JzOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dyaXRlYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3dyaXRlYm9hcmQuY29tcG9uZW50Lmh0bWwnXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBXcml0ZUJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBXcml0ZUJvYXJkJyk7XG4gICAgICAvL25pY0VkaXRvcnMuYWxsVGV4dEFyZWFzKCk7XG4gICAgICBDS0VESVRPUi5yZXBsYWNlKCAnZWRpdG9yJyApO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
