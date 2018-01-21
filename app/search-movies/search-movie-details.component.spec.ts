import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieDetailsComponent } from './search-movie-details.component';

describe('SearchMovieDetailsComponent', () => {
  let component: SearchMovieDetailsComponent;
  let fixture: ComponentFixture<SearchMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
