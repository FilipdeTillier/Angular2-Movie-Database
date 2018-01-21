import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerModule } from './movie-details.routing';
import { HttpModule } from '@angular/http';

import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsIdComponent } from './movie-details-id.component';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailsService } from './movie-details.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule,
    HttpModule
  ],
  declarations: [
    MovieDetailsComponent,
    MovieDetailsIdComponent,
    MovieListComponent
  ],
  exports: [
    MovieListComponent
  ],
  providers: [
    MovieDetailsService
  ]
})
export class MovieDetailsModule { }
