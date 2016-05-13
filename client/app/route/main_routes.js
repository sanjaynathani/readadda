System.register(['../readboard/readboard.component', '../writeboard/writeboard.component', '../security/authentication.component'], function(exports_1) {
    var readboard_component_1, writeboard_component_1, authentication_component_1;
    var MainRoutes;
    return {
        setters:[
            function (readboard_component_1_1) {
                readboard_component_1 = readboard_component_1_1;
            },
            function (writeboard_component_1_1) {
                writeboard_component_1 = writeboard_component_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            exports_1("MainRoutes", MainRoutes = [
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
            ]);
        }
    }
});
