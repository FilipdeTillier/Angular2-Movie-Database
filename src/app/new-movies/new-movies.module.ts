import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMoviesComponent } from './new-movies.component';
import { NewMoviesService } from './new-movies.service';
import { HttpModule } from '@angular/http';
import { routerModule } from './new-movies.routing';
import { NewMovieListComponent } from './new-movie-list.component';
//import { SearchMovieDetailsComponent } from '../search-movies/search-movie-details.component';
import { MovieDetailsModule } from '../movie-details/movie-details.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    routerModule,
    MovieDetailsModule
    //SearchMovieDetailsComponent
  ],
  declarations: [
    NewMoviesComponent,
    NewMovieListComponent,
  ],
  exports: [
    NewMoviesComponent,
    NewMovieListComponent,
  ],
  providers:[
    NewMoviesService
  ]
})
export class NewMoviesModule { }
