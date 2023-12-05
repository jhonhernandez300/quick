import { Component, OnInit } from '@angular/core';
import { iMovie } from '../data/iMovie';
import { MovieService } from '../data/movie.service';
import { MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',  
  standalone: true,
  imports: [MatTableModule,
    RouterModule,
    CommonModule],
})
export class TableComponent {
  displayedColumns: string[] = ['imageRoute', 'title', 'genre', 'releaseDate'];
  dataSource: iMovie[] = [];
    
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
  id: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {    
    this.movieService.GetAllMovies().then((response) => {
      console.log('response of GetAllMovies', response);
      this.items = response;
      this.dataSource = response;
      this.id = response.movieId;
    })
    .catch((error) => {
      console.error(': ', error);
    })
  }

  
}
