import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  { path : '', component : TicketBookingComponent }
];

@NgModule({
  declarations: [
    TicketBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TicketsModule { }
