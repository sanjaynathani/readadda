"use strict";
const readboard_component_1 = require('../readboard/readboard.component');
const storyboard_component_1 = require('../storyboard/storyboard.component');
const writeboard_component_1 = require('../writeboard/writeboard.component');
const authentication_component_1 = require('../security/authentication.component');
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
        path: '/storyboard/:storyId',
        name: 'StoryBoard',
        component: storyboard_component_1.StoryBoardComponent,
        useAsDefault: false
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
