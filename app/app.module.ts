import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerModule } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NewMoviesModule } from './new-movies/new-movies.module';
import { SearchMoviesModule } from './search-movies/search-movies.module';
import { FavouriteMoviesModule } from './favourite-movies/favourite-movies.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MovieDetailsModule } from './movie-details/movie-details.module';
import { SearchMovieDetailsComponent } from './search-movies/search-movie-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NewMoviesModule,
    routerModule,
    SearchMoviesModule,
    FavouriteMoviesModule,
    MovieDetailsModule
  ],
  exports: [
    SearchMovieDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
