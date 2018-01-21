import { Component, OnInit } from '@angular/core';
import { FavouriteMoviesService } from './favourite-movies.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {

  constructor(private favMovie: FavouriteMoviesService) { }
  movies = [];
  ngOnInit() {
    this.favMovie.getFavStream()
    .subscribe(movies => {
      this.movies = movies;
    });
  }

}
