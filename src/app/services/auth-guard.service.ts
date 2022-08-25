import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

interface loginModel{
  username:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  isLoggedin:boolean = false;
  user:any;

  constructor(private http : ApiService, private route:Router) { }


  checkLoginCredentials(data:loginModel)
  {
    this.http.loginUser(data).subscribe((authenticate:any)=>{
      console.log(authenticate);
      this.user=authenticate.data;
      if(authenticate.successCode===200)
      {
        this.isLoggedin=true;

        this.route.navigate(['booking']);
      }
      else{
        alert("worng credentials");
        this.route.navigate(['home']);
      }
    });
  }

  isUserLoggedIn(){
    return this.isLoggedin;
  }
}
