import Fighter from './Figther.js';

function Hero(name, health, attackPower, defensePower) {
  Fighter.call(this, name, health, attackPower, defensePower);
}

Hero.prototype = Object.create(Fighter.prototype);
Hero.prototype.constructor = Hero;
Hero.prototype.sayHello = function () {
  console.log('My name is ' + this.name + '! I am a mighty hero!');
};

export default Hero;
