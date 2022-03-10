function Fighter(name, health, attackPower, defensePower) {
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
  this.defensePower = defensePower;
  this.isDie = false;
}

Fighter.prototype.attack = function (enemy) {
  // it should be this, but it's not working
  // if (this.constructor.name === enemy.constructor.name) {
  if (this.name === enemy.name) {
    console.log('Cannot attack same entity');
    return;
  }

  if (enemy.isDie) {
    console.log('Cannot attack dead entity');
    return;
  }


  const damage = this.attackPower - enemy.defensePower;

  if (damage > 0) {
    enemy.health -= damage;
  }
  console.log(this.name + ' attacks ' + enemy.name + ' for ' + damage + ' damage.');

  if (enemy.health <= 0) {
    enemy.isDie = true;
    console.log(enemy.name + ' is dead.');
    return;
  }

  console.log(enemy.name + ' has ' + enemy.health + ' health left.');
};

export default Fighter;