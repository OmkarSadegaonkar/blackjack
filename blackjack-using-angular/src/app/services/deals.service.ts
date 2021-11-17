import { Injectable } from '@angular/core';
import { CardsService } from './cards.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private cardsService: CardsService, private service: SharedService) { }

  dealNew() {
    this.service.playerCard = [];
    this.service.dealerCard = [];
    this.service.dealerHolder= "";
    this.service.playerHolder= "";
    this.service.message = "Get up to 21 and beat the dealer to win";

    this.service.pValue = 0;
    this.service.dValue = null;
    this.service.cardCount = 0;
    this.deal();
  }

  deal() {
    for (let x = 0; x < 2; x++) {
      this.service.dealerCard.push(this.cardsService.cards[this.service.cardCount]);
      this.service.dealerHolder += this.cardsService.cardOutput(this.service.cardCount, x);
      if (x == 0) {
        this.service.dealerHolder += '<div id="cover" style="left:100px;"></div>';
      }
      this.service.redeal();
      this.service.playerCard.push(this.cardsService.cards[this.service.cardCount]);
      this.service.playerHolder += this.cardsService.cardOutput(this.service.cardCount, x);
      this.service.redeal();
    }
    let playervalue = this.service.checktotal(this.service.playerCard);
    if (playervalue == 21 && this.service.playerCard.length == 2) {
      this.service.playend();
    }
    this.service.pValue = playervalue;
  }

}
