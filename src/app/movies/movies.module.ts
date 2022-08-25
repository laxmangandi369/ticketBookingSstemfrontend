import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { RouterModule,Routes } from '@angular/router';
import { DisplayTheaterComponent } from './display-theater/display-theater.component';
import { SingleDisplayComponent } from './single-display/single-display.component';

const routes : Routes =[
  { path : '', component : DisplayMoviesComponent },
  { path : 'theater', component : DisplayTheaterComponent},
  { path : 'singleMovie/:id', component : SingleDisplayComponent  },
  { path : 'singlePlay/:id', component : SingleDisplayComponent  }
  

];

@NgModule({
  declarations: [
    DisplayMoviesComponent,
    DisplayTheaterComponent,
    SingleDisplayComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesModule {
  constructor(){
    console.log("movie module loaded")
  }
 }
