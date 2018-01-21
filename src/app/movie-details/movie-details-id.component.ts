import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchMoviesService } from '../search-movies/search-movies.service';
import { MovieDetailsService } from './movie-details.service';

@Component({
  selector: 'app-movie-details-id',
  template: `
    <div class="card">
    <div class="card-header">{{movie.title}}</div>
    <div class="card-block row">
        <h4 class="card-title"></h4>
        <img *ngIf="movie.poster_path; else noImg" class="card-img-top img-fluid col-4"
        src="{{urlBigger}}{{movie.poster_path}}" alt="Card image cap">
        <ng-template #noImg><img class="card-img-top img-fluid"  src="{{placeHolder}}" alt="Card image cap"></ng-template>
        <div class="col-8">
          <p><b>Overview: </b>{{movie.overview}}</p>
          <p><b>Release date: </b>{{movie.release_date}}</p>
          <p><b>Original Language: </b>{{movie.original_language}}</p>
          <p><b>Genres: </b><span *ngFor="let genres of movie.genres">{{genres.name}} </span></p>
          <button  (click)="addToFav(movie)"type="button" class="btn btn-success">Add to favourite</button>
        </div>
    </div>
  </div>
  `,
  styles: [
   `
    div.card-block img {
      width: 100%;
      height: auto;
    }
  `
  ]
})
export class MovieDetailsIdComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private searchMoviesService: SearchMoviesService,
    private movieDetailsService: MovieDetailsService
    ) { }
  movie;
  urlBigger = 'https://image.tmdb.org/t/p/w320/';
  ngOnInit() {
    let id = this.activeRoute.snapshot.params['movie_id'];
    this.searchMoviesService.getMovie(id)
    .subscribe(movie => {
      this.movie = movie;
    });
  }

  addToFav(movie){
    this.movieDetailsService.addToFav(movie);
  }

}
