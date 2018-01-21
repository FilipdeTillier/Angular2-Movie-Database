import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteMoviesComponent } from './favourite-movies.component';
import { routerModule } from './favourite-movies.routing';
import { FavouriteMoviesService } from './favourite-movies.service';

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [
    FavouriteMoviesComponent
  ],
  exports: [
    FavouriteMoviesComponent
  ],
  providers: [
    FavouriteMoviesService
  ]
})
export class FavouriteMoviesModule { }
