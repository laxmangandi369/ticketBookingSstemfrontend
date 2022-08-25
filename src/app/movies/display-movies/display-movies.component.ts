import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.scss']
})
export class DisplayMoviesComponent implements OnInit {
  allMovies:any;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getMovies().subscribe((data)=>{
      this.allMovies=data.data;
      console.log(this.allMovies);
    });
  }
  bookNow(movie:any)
  {
    // console.log(this.allMovies);
    console.log(movie,"uhujh");
    localStorage.setItem('movieid', movie.id)
  }
}
