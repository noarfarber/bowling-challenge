'use strict';

describe("Bowling", () => {
  let game;

  beforeEach(() => {
    game = new Bowling();
  });

  let rollAgain = function(pins, rounds) {
    for (let round = 0; round < rounds; round++) {
      game.roll(pins);
    }
  }
  
  describe('gutter game', () => {
    it('can run a gutter game when the player scores nothing', () => {
      rollAgain(0, 20);
      expect(game.scoreBoard()).toEqual(0);
    })
  })
  
  describe('normal game', () => {
    it('can count the knocked down pins of a game', () => {
      rollAgain(1, 20);
      expect(game.scoreBoard()).toEqual(20);
    })
  })

  describe('spare game', () => {
    it('can score a spare round', () => {
      game.roll(4);
      game.roll(6);
      game.roll(2);
      rollAgain(0, 17);
      expect(game.scoreBoard()).toEqual(14);
    })
  })
  
});
