import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  private Url = environment.API_URL;

  constructor(private http: ApiService) { }


  //getListOfSeats :
  getListOfSeats(show:any):Observable<any>{
    return this.http.post<any>(this.Url+"listofseats",show);
  }

//setListOfSeats :
setListOfSeats(MySeat:any):Observable<any>{
  return this.http.post<any>(this.Url+"setseat",MySeat);
}
}
