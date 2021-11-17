import { Component } from '@angular/core';
import { CardsService } from './services/cards.service';
import { DealsService } from './services/deals.service';
import { PlayerService } from './services/player.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(private cardsService: CardsService, private dealsService: DealsService, public playersService: PlayerService, public service: SharedService) { }

  title = 'blackjack-using-angular';

  Start() {
    this.cardsService.shuffleDeck();
    this.dealsService.dealNew();
    this.service.start = false;
    this.service.message = 'Get up to 21 and beat the dealer to win.';
  }

  cardAction(action: string) {
    switch (action) {
      case 'hit':
        this.playersService.playucard(); // add new card to players hand
        break;
      case 'hold':
        this.service.playend(); // playout and calculate
        break;
      default:
        this.service.playend(); // playout and calculate
    }
  }

}
