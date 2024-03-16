import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { HistoryComponent } from './modules/history/components/history/history.component';
import { HistoryFilterComponent } from './modules/history/components/history-filter/history-filter.component';
import { HistoryPassagesComponent } from './modules/history/components/history-passages/history-passages.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { CurrentTicketComponent } from './modules/current-ticket/current-ticket.component';
import { HttpClientModule} from "@angular/common/http";
import { TicketsComponent } from './modules/tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoryComponent,
    HistoryFilterComponent,
    HistoryPassagesComponent,
    FooterComponent,
    CurrentTicketComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
