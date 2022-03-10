import Fighter from './Figther.js';

function Monster(name, health, attackPower, defensePower) {
  Fighter.call(this, name, health, attackPower, defensePower);
}

Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;

export default Monster;
