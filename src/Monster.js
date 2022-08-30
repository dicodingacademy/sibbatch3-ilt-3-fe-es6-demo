import Fighter from './Figther.js';

class Monster extends Fighter {
  constructor({name, health, attackPower, defensePower} = {}) {
    super({
      name: name, 
      health: health, 
      attackPower: attackPower, 
      defensePower: defensePower,
    });
  }
}

export default Monster;
