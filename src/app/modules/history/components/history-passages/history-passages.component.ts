import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-passages',
  templateUrl: './history-passages.component.html',
  styleUrls: ['./history-passages.component.scss']
})
export class HistoryPassagesComponent implements OnInit{
  cardList: any = [
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    },
    {
      title: 'Станция метро Саларьево',
      price: '38 ₽',
      date: '16:03, 06.04.2019',
      card: 'Моя тройка',
      number: '1234 567 890'
    }
  ];

  cards: any[] = [];

   cardPerPage: number = 4;

  public selectedPage = 1;
  allButton = Math.ceil(this.cardList.length / this. cardPerPage);
  ngOnInit(): void {
    let pageIndex = (this.selectedPage - 1) * this. cardPerPage;
    this.cards = this.cardList.slice(pageIndex, this. cardPerPage);
  }

  get pageNumbers(): number[] {
    return Array(this.allButton)
      .fill(0).map((item, i) => i + 1);
  }

  changePage(page: any) {
    this.selectedPage = page;
    this.slicedProducts();
  }

  changeNext() {
    if (this.selectedPage < this.allButton) this.selectedPage = this.selectedPage + 1;
    this.slicedProducts();
  }

  changePrev() {
    if (this.selectedPage > 1) this.selectedPage = this.selectedPage - 1;
    this.slicedProducts();
  }

  slicedProducts() {
    let pageIndex = (this.selectedPage - 1) * this. cardPerPage;
    let endIndex = (this.selectedPage - 1) * this. cardPerPage + this. cardPerPage;
    this.cards = [];
    this.cards = this.cardList.slice(pageIndex, endIndex);
  }
}

