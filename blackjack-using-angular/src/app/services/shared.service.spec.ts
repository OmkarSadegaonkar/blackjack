import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check the total based on values', () => {
    expect(service.checktotal([{ cardnum: '1', cardvalue: 1 }, { cardnum: '2', cardvalue: 2 }])).toEqual(3);
    expect(service.checktotal([{ cardnum: 'A', cardvalue: 10 }, { cardnum: '2', cardvalue: 2 }])).toEqual(12);
    expect(service.checktotal([{ cardnum: 'A', cardvalue: 10 }, { cardnum: 'J', cardvalue: 10 }])).toEqual(20);
    expect(service.checktotal([{ cardnum: 'A', cardvalue: 10 }, { cardnum: 'J', cardvalue: 10 }, { cardnum: '3', cardvalue: 3 }])).toEqual(23);
  });

  it('should redeal', () => {
    service.cardCount = 42;
    service.redeal();
    expect(service.cardCount).toEqual(0);
    expect(service.message).toEqual('New Shuffle');
  });

  it('should end the game', () => {
    service.playend();
    expect(service.message).toContain('Game Over<br>');
    //Some more tests can be added here
  });
});
