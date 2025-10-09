import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () => import('./front-page/front-page.routes').then(m => m.default)
}];
