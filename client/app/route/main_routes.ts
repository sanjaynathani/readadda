import { Route } from './route.interface'
import { ReadBoardComponent } from '../readboard/readboard.component';
import { WriteBoardComponent } from '../writeboard/writeboard.component';
import { AuthenticationComponent } from '../security/authentication.component';

export const MainRoutes: Route[] = [
    {
        path: '/',
        name: 'root',
        redirectTo: ['/ReadBoard']
    },
    {
        path: '/readboard',
        name: 'ReadBoard',
        component: ReadBoardComponent,
        useAsDefault: true
    },
    {
        path: '/writeboard',
        name: 'WriteBoard',
        component: WriteBoardComponent,
        useAsDefault: false
    },
    {
        path: '/authentication',
        name: 'Authentication',
        component: AuthenticationComponent,
        useAsDefault: false
    }
];