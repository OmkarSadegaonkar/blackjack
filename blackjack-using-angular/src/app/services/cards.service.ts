import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  constructor() {
    this.initializeDeck();
   }

  cards: any[] = [];
  suits = ["spades", "hearts", "clubs", "diams"];
  numb = [
    { number: "A", value: 1 },
    { number: "1", value: 1 },
    { number: "2", value: 2 },
    { number: "3", value: 3 },
    { number: "4", value: 4 },
    { number: "5", value: 5 },
    { number: "6", value: 6 },
    { number: "7", value: 7 },
    { number: "8", value: 8 },
    { number: "9", value: 9 },
    { number: "10", value: 10 },
    { number: "J", value: 10 },
    { number: "Q", value: 10 },
    { number: "K", value: 10 }
  ];

  initializeDeck() {
    for (let s in this.suits) {
      const suit = this.suits[s][0].toUpperCase();
      const bgcolor = (suit == "S" || suit == "C") ? "black" : "red";
      for (let n in this.numb) {
        const card = {
          suit: suit,
          icon: this.suits[s],
          bgcolor: bgcolor,
          cardnum: this.numb[n].number,
          cardvalue: this.numb[n].value
        }
        this.cards.push(card);
      }
    }
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  cardOutput(n: number, x: number): string {
    const hpos = (x > 0) ? x * 60 + 100 : 100;
    return '<div class="icard ' + this.cards[n].icon + '" style="left:' + hpos + 'px;">  <div class="top-card suit">' + this.cards[n].cardnum + '<br></div>  <div class="content-card suit"></div>  <div class="bottom-card suit">' + this.cards[n].cardnum +
      '<br></div> </div>';
  }
}
