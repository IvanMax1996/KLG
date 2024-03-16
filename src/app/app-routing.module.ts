import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentTicketComponent } from "./modules/current-ticket/current-ticket.component";
import { TicketsComponent } from "./modules/tickets/tickets.component";
import { HistoryComponent } from "./modules/history/components/history/history.component";

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'current-ticket', component: CurrentTicketComponent },
  { path: 'history-ticket', component: HistoryComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


