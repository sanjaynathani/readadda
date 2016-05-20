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
            template: "\n    <div style=\"width: 100%;\" >\n        <form id=\"loginForm\">\n            <h3><strong>Write your story</strong></h3>\n            <div class=\"form-group\">\n                <label for=\"topicTitle\">Title:</label>\n                <input type=\"text\" class=\"form-control\" id=\"topicTitle\" required/>\n            </div>\n\n            <div id=\"editor\"></div>    \n\n            <div class=\"form-group\">\n                <label for=\"topicSearchTags\">Search Tags:</label>\n                <textarea class=\"form-control\" id=\"topicSearchTags\" required></textarea>\n            </div>\n\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right;\">Publish</button>\n        </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], WriteBoardComponent);
    return WriteBoardComponent;
}());
exports.WriteBoardComponent = WriteBoardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRlYm9hcmQvd3JpdGVib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQTRCbEQ7SUFBQTtJQVFBLENBQUM7SUFOQyxzQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25DLDRCQUE0QjtRQUM1QixRQUFRLENBQUMsT0FBTyxDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE5Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLHV1QkFtQlQ7U0FFRixDQUFDOzsyQkFBQTtJQVNGLDBCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSwyQkFBbUIsc0JBUS9CLENBQUEiLCJmaWxlIjoid3JpdGVib2FyZC93cml0ZWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dyaXRlYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3dyaXRlYm9hcmQuY29tcG9uZW50Lmh0bWwnXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBXcml0ZUJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBXcml0ZUJvYXJkJyk7XG4gICAgICAvL25pY0VkaXRvcnMuYWxsVGV4dEFyZWFzKCk7XG4gICAgICBDS0VESVRPUi5yZXBsYWNlKCAnZWRpdG9yJyk7XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
