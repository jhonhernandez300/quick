import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../data/movie.service';
import { iMovie } from '../data/iMovie';
import { LocalStorageService } from '../data/local-storage.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class DetailsComponent {
  items!: [];  
  id: number = 0;
  imageRoute: string = '';
  comments!: [];
  active = true;
  
  constructor(private route: ActivatedRoute, 
    private movieService: MovieService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {    
    console.log("enable ", this.active);    
    this.id = this.route.snapshot.params['id'];       
    this.movieService.GetMovieById(this.id).then((response: any) => {      
      this.items = response;
      this.imageRoute = response[0].imageRoute;
      this.comments = response[0].comments;      
    })
    .catch((error: any) => {
      console.error(': ', error);
    }) 
  }
  saveWatchlist(): void {
    const list = { movie: this.items };
    this.localStorageService.setData('list', list);
    this.active = !this.active;
  }

  getWatchlist(): void {
    const list = this.localStorageService.getData('list');
    console.log('list:', list);
  }  
}
