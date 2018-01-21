import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class NewMoviesService {

  movies = [];

  constructor(private http: Http) {

  }

  getNewMovies(callback) {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=91518a24040e5e8f0d265d74193fcadb&language=en-US&page=1';
    this.http.get(url)
    .subscribe((response: Response) => {
      const data = response.json();
      const movies = data.results;
      this.movies = movies;
      callback(movies);
    })
  }

}
