import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { SearchMoviesService } from './search-movies.service';

@Component({
  selector: 'app-search-movie-input',
  template: `
    <form [formGroup]="searchForm">
        <div class="input-group">
            <input type="text" class="form-control" formControlName="value" placeholder="Search for...">
        </div>
    </form>
  `,
  styles: [
    `
      form{
        margin-bottom: 50px;
      }
    `
  ]
})
export class SearchMovieInputComponent implements OnInit {

  searchForm:FormGroup

  constructor(private searchMovie: SearchMoviesService) {
    this.searchForm = new FormGroup({
      'value': new FormControl('Dragon ball')
    })

    this.searchForm.get('value').valueChanges
      // .filter(value => value.length >= 2)
      // .distinctUntilChanged()
      // .debounceTime(400)
      .subscribe(value => {
        this.searchMovie.search(value)
    });
  }

  search(value){
     this.searchMovie.search(value)
  }


  ngOnInit() {
  }

}
