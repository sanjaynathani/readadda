"use strict";
var readboard_component_1 = require('../readboard/readboard.component');
var writeboard_component_1 = require('../writeboard/writeboard.component');
var authentication_component_1 = require('../security/authentication.component');
exports.MainRoutes = [
    {
        path: '/',
        name: 'root',
        redirectTo: ['/ReadBoard']
    },
    {
        path: '/readboard',
        name: 'ReadBoard',
        component: readboard_component_1.ReadBoardComponent,
        useAsDefault: true
    },
    {
        path: '/writeboard',
        name: 'WriteBoard',
        component: writeboard_component_1.WriteBoardComponent,
        useAsDefault: false
    },
    {
        path: '/authentication',
        name: 'Authentication',
        component: authentication_component_1.AuthenticationComponent,
        useAsDefault: false
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlL21haW5fcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvQ0FBbUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN0RSxxQ0FBb0Msb0NBQW9DLENBQUMsQ0FBQTtBQUN6RSx5Q0FBd0Msc0NBQXNDLENBQUMsQ0FBQTtBQUVsRSxrQkFBVSxHQUFZO0lBQy9CO1FBQ0ksSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQztLQUM3QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsU0FBUyxFQUFFLHdDQUFrQjtRQUM3QixZQUFZLEVBQUUsSUFBSTtLQUNyQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGFBQWE7UUFDbkIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLDBDQUFtQjtRQUM5QixZQUFZLEVBQUUsS0FBSztLQUN0QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxrREFBdUI7UUFDbEMsWUFBWSxFQUFFLEtBQUs7S0FDdEI7Q0FDSixDQUFDIiwiZmlsZSI6InJvdXRlL21haW5fcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL3JvdXRlLmludGVyZmFjZSdcbmltcG9ydCB7IFJlYWRCb2FyZENvbXBvbmVudCB9IGZyb20gJy4uL3JlYWRib2FyZC9yZWFkYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFdyaXRlQm9hcmRDb21wb25lbnQgfSBmcm9tICcuLi93cml0ZWJvYXJkL3dyaXRlYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vc2VjdXJpdHkvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IE1haW5Sb3V0ZXM6IFJvdXRlW10gPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIG5hbWU6ICdyb290JyxcbiAgICAgICAgcmVkaXJlY3RUbzogWycvUmVhZEJvYXJkJ11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9yZWFkYm9hcmQnLFxuICAgICAgICBuYW1lOiAnUmVhZEJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBSZWFkQm9hcmRDb21wb25lbnQsXG4gICAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3dyaXRlYm9hcmQnLFxuICAgICAgICBuYW1lOiAnV3JpdGVCb2FyZCcsXG4gICAgICAgIGNvbXBvbmVudDogV3JpdGVCb2FyZENvbXBvbmVudCxcbiAgICAgICAgdXNlQXNEZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgbmFtZTogJ0F1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgdXNlQXNEZWZhdWx0OiBmYWxzZVxuICAgIH1cbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
