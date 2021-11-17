import { Injectable } from '@angular/core';
import { CardsService } from './cards.service';
import { DealsService } from './deals.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private cardsService: CardsService, private dealsService: DealsService, private service: SharedService) { }

  playucard() {
    this.service.playerCard.push(this.cardsService.cards[this.service.cardCount]);
    this.service.playerHolder += this.cardsService.cardOutput(this.service.cardCount, (this.service.playerCard.length - 1));
    this.service.redeal();
    const rValu = this.service.checktotal(this.service.playerCard);
    this.service.pValue = rValu;
    if (rValu > 21) {
      this.service.message = "busted!";
      this.service.playend();
    }
  }

}
