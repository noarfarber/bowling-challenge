'use strict';

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  let rollAgain = function(pins, rounds) {
    for(let round = 0; round < rounds; round++) {
      game.roll(pins);
    }
  }

  it('can run a gutter game when the player scores nothing', () => {
    rollAgain(0, 20);
    expect(game.scoreBoard()).toEqual(0)
  });

  it('can count the knocked down pins of a game', () => {
    rollAgain(1, 20);
    expect(game.scoreBoard()).toEqual(20)
  });

});
