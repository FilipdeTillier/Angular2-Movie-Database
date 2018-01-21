import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchMoviesService {

  movies = [];
  movieStream = new Subject();

  constructor(private http: Http) {
    this.search('Dragon ball');
  }

  getMovieStream(){
    return Observable
      .from(this.movieStream)
      .startWith(this.movies)
  }

  getMovie(id){
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=91518a24040e5e8f0d265d74193fcadb&language=en-US`;
    return this.http.get(url)
    .map((response:Response)=> response.json() );
  }

  search(value){
    let url = `https://api.themoviedb.org/3/search/movie?include_adult=false&page=
    1&query=${value}&language=en-US&api_key=91518a24040e5e8f0d265d74193fcadb`;
    this.http.get(url)
      .map((response: Response) => {
        let data = response.json();
        return data.results;
      })
      .do(movies => {this.movies = movies})
      .subscribe(movies => {
        this.movieStream.next(this.movies);
      });
  }

}
