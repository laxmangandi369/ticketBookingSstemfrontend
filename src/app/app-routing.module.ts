import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  { 
    path : '',
    loadChildren : ()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path : 'movies',
    loadChildren : ()=> import('./movies/movies.module').then(m=>m.MoviesModule)
  },
  {
    path : 'booking',
    loadChildren : ()=> import('./tickets/tickets.module').then(m=>m.TicketsModule)
  }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
