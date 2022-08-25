import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-display',
  templateUrl: './single-display.component.html',
  styleUrls: ['./single-display.component.scss']
})
export class SingleDisplayComponent implements OnInit {
  showid!: number;
  url:any;
  showDetails:any;
  constructor(private httpservice:ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showid = this.route.snapshot.params['id'];

    this.url = this.route.snapshot.routeConfig;
    this.getProductDetail(this.url.path);
  }
  getProductDetail(recievedUrl: any) {
    if (recievedUrl === "singleMovie/:id") {
      this.httpservice.getMovieById(this.showid).subscribe((data) => {
        this.showDetails = data.data;
      });
    }
    if(recievedUrl === "singlePlay/:id")
    {
      this.httpservice.getPlayById(this.showid).subscribe((data)=>{
        this.showDetails = data.data;
      })
    };
  }

  bookNow()
  {
    if(this.url.path=== "singleMovie/:id")
    {
      localStorage.setItem('movieid',this.showDetails.id);
    }
    else
    {
      localStorage.setItem('playId', this.showDetails.id);
    }
  }

}
