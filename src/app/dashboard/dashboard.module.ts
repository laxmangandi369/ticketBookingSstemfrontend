import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../services/api.interceptor';
import { DisplayMoviesComponent } from '../movies/display-movies/display-movies.component';
import { TicketBookingComponent } from '../tickets/ticket-booking/ticket-booking.component';

const routes : Routes =[
  { path : '', component : HomepageComponent},
  { path : 'signup', component : SignupComponent}

  // { path: 'movies', component: DisplayMoviesComponent},
  // { path: 'booking', component : TicketBookingComponent}
];

@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    RouterModule.forChild(routes)
  ],
  providers: [ApiService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  exports:[
     RouterModule
  ]
})
export class DashboardModule { }
