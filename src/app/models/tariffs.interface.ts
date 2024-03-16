import { IOffers } from "./offers.interface";

export interface ITariff {
  id: number,
  name: string,
  title: string,
  description: string,
  offers: IOffers[]
}
