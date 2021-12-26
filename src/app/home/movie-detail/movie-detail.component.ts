import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Movies } from 'src/app/models/movie';
import { Tvs } from 'src/app/models/tv';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: number = 0;
  type: string = '';
  movie: Movies = { id: 0, title: '', poster_path: '', release_date: '', overview: '', genres: [{ name: '' }], tagline: '', production_companies: [{ logo_path: '', name: '' }], };
  tv: Tvs = { id: 0, name: '', poster_path: '', first_air_date: '', overview: '', genres: [{ name: '' }], tagline: '', production_companies: [{ logo_path: '', name: '' }], };

  constructor(private location: Location, private api: ApiService) { }

  ngOnInit(): void {
    this.id = history.state.id;
    this.type = history.state.type;
    this.getDetail(this.id, this.type)
  }

  getDetail(id: number, type: string) {
    this.api.getDetail(id, type).then((res: any) => {
      if (res) {
        switch (this.type) {
          case 'movie/':
            this.movie = res;
            break;
          case 'tv/':
            this.tv = res;
        }
      }
    });
  }

}
