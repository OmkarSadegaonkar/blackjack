import { TestBed } from '@angular/core/testing';
import { CardsService } from './cards.service';

import { DealsService } from './deals.service';
import { SharedService } from './shared.service';

export class SharedServiceStub {
  message = '';
  redeal() {};
  checktotal() { return 'ok'};
  dealerCard = [];
  playerCard = [];
  cardCount = 2;
  pValue = '';
}

export class CardsServiceStub {
  cardOutput(){};
  cards = [];
}

describe('DealsService', () => {
  let service: DealsService;
  let sharedServiceStub: SharedServiceStub;
  let cardsServiceStub: CardsServiceStub;

  beforeEach(() => {
    sharedServiceStub = new SharedServiceStub();
    cardsServiceStub = new CardsServiceStub();
    TestBed.configureTestingModule({
      providers: [{ provide: SharedService, useValue: sharedServiceStub }, { provide: CardsService, useValue: cardsServiceStub }]
    });
    service = TestBed.inject(DealsService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create newdeal', () => {
    service.dealNew();
    expect(sharedServiceStub.message).toEqual('Get up to 21 and beat the dealer to win')
  });

  it('should call for deal', () => {
    service.deal();
    expect(sharedServiceStub.pValue).toEqual('ok');
  });
});
