import { Component, OnInit } from '@angular/core';
import { iMovie } from '../data/iMovie';
import { MovieService } from '../data/movie.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  movie: iMovie = {
    movieId: 0,
    releaseDate: new Date(),
    title: '',
    description: '', 
    rating: 0.0,
    duration: "0h 0min",
    genre: "start-genre",
    imageRoute: "start-imageRoute",
    trailerLink: "start-trailerLink",
    comments: []
  };

  items!: any[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {    
    this.movieService.GetAllMovies().then((response) => {
      console.log('response of GetAllMovies', response);
      this.items = response;
    })
    .catch((error) => {
      console.error(': ', error);
    })
  }
}
