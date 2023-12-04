import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { iMovie } from './iMovie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  // GetSong(song: string): Promise<any> {
  //   console.log(song);
  //   return this.http.get<any>('https://localhost:7110/api/song/GetSong' + "/" + song)
  //   .toPromise();
  // }

  GetAllMovies(): Promise<any> {
    console.log("servicio GetAllMovies");
    return this.http.get<any>('https://localhost:7110/api/movie/GetAllMovies')
    .toPromise();
  }

   GetMovieById(id: number): Promise<any> {
    console.log(id);
    return this.http.get<any>('https://localhost:7110/api/movie/GetMovieById' + "/" + id)
    .toPromise();
  }
}
