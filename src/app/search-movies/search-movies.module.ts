import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerModule } from './search-movies.routing';
import { HttpModule } from '@angular/http';

import { SearchMoviesService } from './search-movies.service';
import { SearchMovieListComponent } from './search-movie-list.component';
import { SearchMoviesComponent } from './search-movies.component';
import { SearchMovieInputComponent } from './search-movie-input.component';
import { MovieDetailsModule } from '../movie-details/movie-details.module';



@NgModule({
  imports: [
    CommonModule,
    routerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MovieDetailsModule
  ],
  declarations: [
    SearchMoviesComponent,
    SearchMovieListComponent,
    SearchMovieInputComponent,
  ],
  exports: [
    SearchMoviesComponent,
  ],
  providers: [
    SearchMoviesService
  ]
})
export class SearchMoviesModule { }
