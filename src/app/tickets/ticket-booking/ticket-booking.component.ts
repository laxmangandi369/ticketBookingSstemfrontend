import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent implements OnInit {
  currentMovieId:any;
  currentShow:any;
  // row: any=10;
  // seats: number=20;
  // theaterArr:any = [];
  // characters =['A','B','C','D','E','F','I','J','K','L'];
  constructor(private http:ApiService)
  {}
  ngOnInit(): void {
    // this.currentMovieId = this.route.snapshot.routeConfig;
    this.currentMovieId=localStorage.getItem('movieid');
    this.http.getMovieById(this.currentMovieId).subscribe((data)=>{
        this.currentShow=data.data;
    })
  console.log(this.currentShow);
  }

  getSeatInfo(rows:number, columns:number)
  {
    for(let row=1; row<= rows; row++)
    {
      // for(let coulumn=1;column<=columns;columns++)
      // {

      // }
    }
  }
  
  }

