import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class FavouriteMoviesService {

  constructor(private http: Http) { }
  movies;
  favMoviesStream = new Subject<any[]>();

  getFav(){
    return this.http.get('http://localhost:3000/db')
            .map(response => response.json())
            .subscribe(movies => {
              this.movies = movies.movies;
              this.favMoviesStream.next(this.movies);
            });
  }

  getFavStream(){
    this.getFav();
    return this.favMoviesStream.startWith(this.movies);
  }
}
