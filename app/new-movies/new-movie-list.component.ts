import { Component, OnInit } from '@angular/core';
import { NewMoviesService } from './new-movies.service';


@Component({
  selector: 'app-new-movie-list',
  template: `
  <div *ngFor="let movie of movies" [routerLink]="['/movie', 'details', movie.id]"
  class="card-deck col-lg-3 col-md-4 col-sm-6 col-12 margin-bottom">
     <div class="card">
            <img class="card-img-top img-fluid" src="{{urlBigger}}{{movie.poster_path}}" alt="Card image cap">
            <div class="card-block">
                <h4 class="card-title">{{movie.title}}</h4>
            </div>
        </div>
  </div>
  `,
  styles: [
    `
    .margin-bottom{
      margin-bottom: 25px;
    }
    .card-deck img{
      width:100%;
      filter: grayscale(100%);
      transition: filter 2s;
      -webkit-transition: filter 0.2s;
    }
    .card-deck:hover img{
      filter: grayscale(0%);
    }
    .card-deck:hover{
      cursor: pointer;
    }
    `
  ]
})
export class NewMovieListComponent implements OnInit {

  constructor(private newMoviesService: NewMoviesService) { }
  imgUrl = "https://image.tmdb.org/t/p/w45/";
  urlBigger = 'https://image.tmdb.org/t/p/w320/';
  movies;

  ngOnInit() {
    this.movies = this.newMoviesService.getNewMovies((movies)=>{
      this.movies = movies;
    });
  }


}
