'use strict';

function Game(){
    this._rolls = [];

  Game.prototype.roll = function(pins){
    this._rolls.push(pins);
  }

  Game.prototype.scoreBoard = function(){
    let counter = 0;
    for(let round = 0; round < 20; round++) {
      counter += this._rolls[round]
    }
    return counter
  }

}
