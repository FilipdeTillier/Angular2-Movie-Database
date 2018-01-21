import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteMoviesComponent } from './favourite-movies.component';
import { routerModule } from './favourite-movies.routing';
import { FavouriteMoviesService } from './favourite-movies.service';
import { MovieListComponent } from '../movie-details/movie-list.component';
import { MovieDetailsModule } from '../movie-details/movie-details.module';


@NgModule({
  imports: [
    CommonModule,
    routerModule,
    MovieDetailsModule
  ],
  declarations: [
    FavouriteMoviesComponent
  ],
  exports: [
    FavouriteMoviesComponent
  ],
  providers: [
    FavouriteMoviesService
  ],

})
export class FavouriteMoviesModule { }
