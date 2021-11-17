import { Injectable } from '@angular/core';
import { CardsService } from './cards.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  message = 'Press Start Button';
  start = true;
  playerHolder = '';
  dealerHolder = '';
  playerCard: any[] = [];
  dealerCard: any[] = [];
  pValue = 0;
  dValue: any;
  cardCount = 0;

  constructor(private cardsService: CardsService) { }

  checktotal(arr: any[]) {
    let rValue = 0;
    let aceAdjust = false;
    for (let i in arr) {
      if (arr[i].cardnum == 'A' && !aceAdjust) {
        aceAdjust = true;
        rValue = rValue + 10;
      }
      rValue = rValue + arr[i].cardvalue;
    }

    if (aceAdjust && rValue > 21) {
      rValue = rValue - 10;
    }
    return rValue;
  }

  playend() {
    this.start = true;
    this.message = "Game Over<br>";
    var payoutJack = 1;
    var dealervalue = this.checktotal(this.dealerCard);
    this.dValue = dealervalue;

    while (dealervalue < 17) {
      this.dealerCard.push(this.cardsService.cards[this.cardCount]);
      this.dealerHolder += this.cardsService.cardOutput(this.cardCount, (this.dealerCard.length - 1));
      this.redeal();
      dealervalue = this.checktotal(this.dealerCard);
      this.dValue = dealervalue;
    }

    //WHo won???
    var playervalue = this.checktotal(this.playerCard);
    if (playervalue == 21 && this.playerCard.length == 2) {
      this.message = "Player Blackjack";
      payoutJack = 1.5;
    }

    if ((playervalue < 22 && dealervalue < playervalue) || (dealervalue > 21 && playervalue < 22)) {
      this.message += '<span style="color:green;">You WIN!</span>';
    } else if (playervalue > 21) {
      this.message += '<span style="color:red;">Dealer Wins!</span>';
    } else if (playervalue == dealervalue) {
      this.message += '<span style="color:blue;">GAME OVER</span>';
    } else {
      this.message += '<span style="color:red;">Dealer Wins!</span>';
    }
    this.pValue = playervalue;
  }

  redeal() {
    this.cardCount++;
    if (this.cardCount > 40) {
      this.cardsService.shuffleDeck();
      this.cardCount = 0;
      this.message = 'New Shuffle';
    }
  }
}
