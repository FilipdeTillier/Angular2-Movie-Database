import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  template: `
    <div  class="card margin-bottom my-card">
          <img *ngIf="movie.poster_path; else noImg" class="card-img-top img-fluid"
          src="{{urlBigger}}{{movie.poster_path}}" alt="Card image cap">
          <ng-template #noImg><img class="card-img-top img-fluid"  src="{{placeHolder}}" alt="Card image cap"></ng-template>
          <div class="card-block">
              <h4 class="card-title">{{movie.title}}</h4>
          </div>
  `,
  styles: [`
    .margin-bottom{
      margin-bottom: 25px;
    }
    .my-card img{
      width:100%;
      filter: grayscale(100%);
      transition: filter 2s;
      -webkit-transition: filter 0.2s;
    }
    .my-card:hover img{
      filter: grayscale(0%);
    }
    .my-card:hover{
      cursor: pointer;
    }
    `]
})
export class MovieListComponent implements OnInit {

  movies;
  imgUrl = 'https://image.tmdb.org/t/p/w45/';
  urlBigger = 'https://image.tmdb.org/t/p/w320/';
  placeHolder = 'http://via.placeholder.com/320x480';
  movie;

  @Input('movie')
  set setAlbum(movie){
    this.movie = movie;
  }



  constructor() { }

  ngOnInit() {
  }

}
