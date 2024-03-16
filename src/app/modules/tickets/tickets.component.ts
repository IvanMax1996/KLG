import { Component, OnInit } from '@angular/core';
import { ITickets } from "../../models/tickets.interface";
import { TicketsService } from "../../repository/tariff";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})

export class TicketsComponent implements OnInit {
  tickets: ITickets[] = [];
  loading = false;
  message = false;
  constructor(private _ticketService: TicketsService) {}

  ngOnInit(): void {
    this.loading = true;
    this._ticketService.getTickets().subscribe({
      next: (tickets => {
        this.tickets = tickets.data.map(ticket => {
          ticket.image_url = `${environment.apiURL}/storage/uploads/` + ticket.image_url;
          return ticket;
        });
        this.loading = false;
      }),
      error: (() => {
        this.loading = false;
        this.message = true;
      })
    })
  }
}
