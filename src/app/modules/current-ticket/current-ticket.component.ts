import { Component, OnInit } from '@angular/core';
import { TicketsService } from "../../repository/tariff";
import { ITariff } from "../../models/tariffs.interface";

@Component({
  selector: 'app-current-ticket',
  templateUrl: './current-ticket.component.html',
  styleUrls: ['./current-ticket.component.scss']
})

export class CurrentTicketComponent implements OnInit {
  tariffs: ITariff[] = [];
  constructor(private _ticketService: TicketsService) {
  }

  ngOnInit(): void {
    this._ticketService.getTariffOfTickets(2).subscribe({
      next: (tickets => this.tariffs = tickets.data)
    })
  }
}
