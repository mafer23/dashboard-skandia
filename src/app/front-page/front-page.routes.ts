import { Routes } from "@angular/router";
import { FrontPageLayoutComponent } from "./layouts/front-page-layout/front-page-layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const frontPagesRoutes: Routes = [
  {
    path: '',
    component: FrontPageLayoutComponent,
    children:[
        {
        path: '',
        component: HomePageComponent
    },

]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

export default frontPagesRoutes ;
