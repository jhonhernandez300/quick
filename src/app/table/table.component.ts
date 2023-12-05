import { Component, OnInit, ViewChild } from '@angular/core';
import { iMovie } from '../data/iMovie';
import { MovieService } from '../data/movie.service';
import { MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  //styleUrl: './table.component.css',  
  styleUrls: ['./table.component.css'],  
  standalone: true,
  imports: [MatTableModule,
    RouterModule,
    CommonModule,
    MatSortModule,
  ],
})
export class TableComponent {
  displayedColumns: string[] = ['imageRoute', 'title', 'genre', 'releaseDate'];
  //dataSource: iMovie[] = [];
  dataSource = new MatTableDataSource();
    
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

  constructor(private movieService: MovieService,
    private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    console.log('this.sort ', this.sort);
    console.log('this.dataSource.sort ', this.dataSource.sort);
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {   
    console.log('sortState ', sortState);
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {    
    this.movieService.GetAllMovies().then((response) => {
      console.log('response of GetAllMovies', response);
      this.items = response;
      this.dataSource = new MatTableDataSource(response);
      console.log('dataSource ', this.dataSource);
      this.id = response.movieId;
    })
    .catch((error) => {
      console.error(': ', error);
    })
  }

  
}
