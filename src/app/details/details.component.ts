import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../data/movie.service';
import { iMovie } from '../data/iMovie';
import { LocalStorageService } from '../data/local-storage.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  standalone: true,
  imports: [MatCardModule, 
    MatButtonModule,
    CommonModule],
})
export class DetailsComponent {
  items!: [];  
  id: number = 0;
  imageRoute: string = '';
  comments!: [];
  active = true;  
  movies: any[] = [];    
  
  constructor(private route: ActivatedRoute, 
    private movieService: MovieService,
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {   
    //this.localStorageService.removeAllData();
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
    if(this.localStorageService.isEmpty())
    {
      this.localStorageService.setData('list', this.items);
    }else
    {
      const oldData = this.localStorageService.getData('list');
      oldData.push(...this.items);
      this.localStorageService.setData('list', oldData);   
    }
     
    this.active = !this.active;
  }

  getWatchlist(): void {
    const list = this.localStorageService.getData('list');
    console.log('localstorage tiene :', list);
  }  
}
