import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FavouriteMoviesService } from '../favourite-movies/favourite-movies.service';


@Injectable()
export class MovieDetailsService {

  constructor(private http: Http, private favouriteMoviesService:FavouriteMoviesService) { }

  urlBase = 'http://localhost:3000/db/  ';

  addToFav(movie){
    let request;
    if(movie.id){
      request = this.http.put(this.urlBase + movie.id, movie);
    }else{
      request = this.http.post(this.urlBase, movie);
    }
    return request.map(response => response.json())
      .do( playlist => {
        this.favouriteMoviesService.getFav();
      })
  }

}
