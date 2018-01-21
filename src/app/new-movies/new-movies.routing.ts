import { RouterModule, Routes } from '@angular/router';
import { NewMoviesComponent } from './new-movies.component';
import { NewMovieListComponent } from './new-movie-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';


const routesConfig: Routes = [
  {path: 'home', component: NewMoviesComponent },
  {path: 'movies/details/:movie_id', component: MovieDetailsComponent },
]

export const routerModule = RouterModule.forChild(routesConfig)
