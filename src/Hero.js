import Fighter from './Figther.js';

class Hero extends Fighter {
  constructor({name, health, attackPower, defensePower} = {}) {
    super({
      name: name, 
      health: health, 
      attackPower: attackPower, 
      defensePower: defensePower,
    });
  }

  sayHello() {
    console.log(`My name is ${this.name}! I am a mighty hero!`);
  }
}

export default Hero;
