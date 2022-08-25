import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'ticketingsystem';

  formdetails !: FormGroup;

  constructor(private authService: AuthGuardService){}

  ngOnInit(): void {
    this.formdetails = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    })
  }

  get email()
  {
    return this.formdetails.get('email');
  }

  get password()
  {
    return this.formdetails.get('password');
  }

  login()
  {
    console.log(this.formdetails.value)
     this.authService.checkLoginCredentials(this.formdetails.value);
    
  }
}
