import { RouterModule, Routes } from '@angular/router';
import { FavouriteMoviesComponent } from './favourite-movies.component';


const routesConfig:Routes = [
  {path: 'favourite', component: FavouriteMoviesComponent},
]

export const routerModule = RouterModule.forChild(routesConfig)
