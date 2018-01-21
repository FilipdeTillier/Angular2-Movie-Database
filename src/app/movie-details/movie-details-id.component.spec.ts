import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsIdComponent } from './movie-details-id.component';

describe('MovieDetailsIdComponent', () => {
  let component: MovieDetailsIdComponent;
  let fixture: ComponentFixture<MovieDetailsIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
