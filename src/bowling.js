'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
  }
    roll(pins) {
      this.rolls.push(pins);
    };

    scoreBoard() {
      let counter = 0;
      let round = 0;
  
      for (let frame = 0; frame < 10; frame++) {
        if (this.rolls[round] + this.rolls[round + 1] == 10) {
          counter += this.rolls[round] + this.rolls[round + 1] + this.rolls[round + 2];
        } else { 
            counter += this.rolls[round] + this.rolls[round + 1];
        }
        round += 2;
      }
      return counter;
    }



  

}
