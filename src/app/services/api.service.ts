import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  post<T>(arg0: string, show: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  private baseUrl = environment.API_URL;

  constructor(private http : HttpClient) { }

  getMovies() :Observable<any>
  {
    return this.http.get(this.baseUrl+'/movie');
  }
  getMovieById(id:number) : Observable<any>
  {
    return this.http.get(this.baseUrl+'/movie/'+id);
  }
  getPlays() : Observable<any>
  {
    return this.http.get(this.baseUrl+"/play");
  }
  getPlayById(id:number) : Observable<any>
  {
    return this.http.get(this.baseUrl+"/play/"+id);
  }
  postUserData(data:any) : Observable<any>
  {
    return this.http.post(this.baseUrl+'/user/register',data);
  }
  loginUser(data:any) : Observable<any>
  {
    return this.http.post(this.baseUrl+"/user/login",data);
  }

  getBookings() : Observable<any>
  {
    return this.http.get(this.baseUrl+"/booking");
  }

  bookTickets(data:any) : Observable<any>
  {
    return this.http.post(this.baseUrl+"/booking",data);
  }
  getReservedSeats(movieId:number)
  {
    return this.http.get(this.baseUrl+"/booking/"+movieId);
  }

  getAllSeats() :Observable<any>
  {
    return this.http.get(this.baseUrl+"/seats");
  }

  reserveSeat(data:any) :Observable<any>
  {
      return this.http.post(this.baseUrl+"seats",data);
  }
}
