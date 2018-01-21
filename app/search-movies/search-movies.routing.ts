import { RouterModule, Routes } from '@angular/router';
import { SearchMoviesComponent } from './search-movies.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';


const routesConfig: Routes = [
  {path: 'search', component: SearchMoviesComponent},
  {path: 'movie/details/:movie_id', component: MovieDetailsComponent },
]

export const routerModule = RouterModule.forChild(routesConfig)
