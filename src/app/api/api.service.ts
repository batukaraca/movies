import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url: any = 'https://api.themoviedb.org/3/';
  private API_KEY = 'a215f78dc820845e86cc434c4688d232';

  private popularMovies = 'movie/popular?api_key=' + this.API_KEY + '&language=en-US&page=1';
  private popularTv = 'tv/popular?api_key=' + this.API_KEY + '&language=en-US&page=1';
  private detail = '?api_key=' + this.API_KEY + '&language=en-US&page=1';

  constructor(private http: HttpClient) { }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getMovies(): Promise<Object> {
    return this.http
      .get(this.base_url + this.popularMovies)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  getTvs(): Promise<Object> {
    return this.http
      .get(this.base_url + this.popularTv)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }

  getDetail(id: number, type: string): Promise<Object> {
    return this.http
      .get(this.base_url + type +'/'+ id +this.detail)
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(this.handleError);
  }
}
