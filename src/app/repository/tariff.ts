import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from "rxjs";
import { ITariff } from "../models/tariffs.interface";
import { environment } from "../../environments/environment";
import { BaseResponseInterface } from "../models/base-response.interface";
import { ITickets } from "../models/tickets.interface";

@Injectable({
  providedIn: 'root'
})

export class TicketsService {
  constructor(private _http: HttpClient) {}
  getTariffOfTickets(id: number): Observable<BaseResponseInterface<ITariff[]>> {
    return this._http.get<BaseResponseInterface<ITariff[]>>(`${environment.apiURL}${environment.apiVersion}/tickets/${id}/tariffs`)
  }
  getTickets(): Observable<BaseResponseInterface<ITickets[]>> {
    return this._http.get<BaseResponseInterface<ITickets[]>>(`${environment.apiURL}${environment.apiVersion}/tickets`).pipe(delay(2000))
  }
}
