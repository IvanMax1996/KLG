import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentTicketComponent } from "./modules/current-ticket/current-ticket.component";
import { HistoryComponent } from "./modules/history/components/history/history.component";

const routes: Routes = [
  { path: '', component: HistoryComponent },
  { path: 'current-ticket', component: CurrentTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


