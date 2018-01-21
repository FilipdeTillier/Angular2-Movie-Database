import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieListComponent } from './new-movie-list.component';

describe('NewMovieListComponent', () => {
  let component: NewMovieListComponent;
  let fixture: ComponentFixture<NewMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
