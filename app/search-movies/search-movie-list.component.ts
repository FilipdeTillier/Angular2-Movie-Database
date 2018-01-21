import { Component, OnInit } from '@angular/core';
import { SearchMoviesService } from './search-movies.service';

@Component({
  selector: 'app-search-movie-list',
  template: `
     <app-search-movie-details  *ngFor="let movie of movies | async" [movie]="movie"
     [routerLink]="['/movie', 'details' , movie.id]"
     class="card-deck col-lg-3 col-md-4 col-sm-6 col-12 margin-bottom"></app-search-movie-details>
  `,
  styles: [

  ]
})
export class SearchMovieListComponent implements OnInit {

  movies;


  constructor(private searchMovie: SearchMoviesService) { }

  ngOnInit() {
    this.movies = this.searchMovie.getMovieStream();
  }

}
