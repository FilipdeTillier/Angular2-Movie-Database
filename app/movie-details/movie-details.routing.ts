import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';

const routesConfig:Routes = [
   {path:'details', component: MovieDetailsComponent,
    children:[
       {path:':id', component: MovieDetailsComponent },
    ] },
]
export const routerModule = RouterModule.forChild(routesConfig)
