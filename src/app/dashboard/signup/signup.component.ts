import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ISignUpModel } from 'src/ISignUpModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignupFormDetails:ISignUpModel={
    firstName : '',
    lastName : '',
    email : '',
    contact : 0,
    gender : '',
    password : ''
  };
  formdetails !:FormGroup;
  constructor(private http : ApiService,private router:Router) { }

  ngOnInit(): void {

    this.formdetails = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      contact: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      gender: new FormControl('',[Validators.required,]),
      password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    }) 
  }

  clickAddProduct()
  {
    let url = 'posts';
    let apidata = this.formdetails.value;

    this.postProductDetails();
    this.http.postUserData(apidata).subscribe(response => {
     
      alert("New Product Added");
    });
    this.router.navigate(['/movies']);
  }
  postProductDetails(){
    
    this.SignupFormDetails.firstName=this.formdetails.value.firstName;
    this.SignupFormDetails.lastName=this.formdetails.value.lastName;
    this.SignupFormDetails.email=this.formdetails.value.email;
    this.SignupFormDetails.contact=this.formdetails.value.contact;
    if(this.formdetails.value.gender==='female'|| this.formdetails.value.gender==='Female')
    {
      this.formdetails.value.gender='f';
    }
    if(this.formdetails.value.gender==='male' || this.formdetails.value.gender==='Male')
    {
      this.formdetails.value.gender='m';
    }
    this.SignupFormDetails.gender=this.formdetails.value.gender;
    this.SignupFormDetails.password=this.formdetails.value.password;

    return this.SignupFormDetails;
  }
}
