import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieInputComponent } from './search-movie-input.component';

describe('SearchMovieInputComponent', () => {
  let component: SearchMovieInputComponent;
  let fixture: ComponentFixture<SearchMovieInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMovieInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
