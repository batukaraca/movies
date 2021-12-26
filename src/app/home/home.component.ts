import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Movies } from '../models/movie';
import { Tvs } from '../models/tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieType = 1;
  movies: Movies[] = [];
  tvs: Tvs[] = [];
  public parentValue: string = 'This Data is Coming From Parent To Child - via @Input()';

  constructor(private api: ApiService) {

    this.getMovies();
    this.getTvs();
  }

  ngOnInit(): void {

  }

  changeType(type: number) {
    this.movieType = type;
  }

  getMovies() {
    this.api.getMovies().then((res: any) => {
      if (res) {
        this.movies = res.results;
      }
    });
  }
  getTvs() {
    this.api.getTvs().then((res: any) => {
      if (res) {
        this.tvs = res.results;
      }
    });
  }
}
