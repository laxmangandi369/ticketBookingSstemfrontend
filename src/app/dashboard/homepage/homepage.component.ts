import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  localData:any;
  featuredMovieData:any;
  featuredPlayData:any;
  constructor(private http : ApiService) { }

  ngOnInit(): void {
    this.http.getMovies().subscribe((data)=>{
      // this.localData= data.data;
      this.featuredMovies(data.data);
    });

    this.http.getPlays().subscribe((data)=>{
      this.featuredPlays(data.data);
    })

  }

  bookNow(movies:any)
  {
    console.log(movies);
    localStorage.setItem('movieid', movies.id);
  }
  featuredMovies(data:any)
  {
    
     this.featuredMovieData = data.splice(0,4);
  }
  featuredPlays(data:any)
  {
    this.featuredPlayData = data.splice(0,4);
  }
}
