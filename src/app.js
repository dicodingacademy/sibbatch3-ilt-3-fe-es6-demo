function Fighter(name, health, attackPower, defensePower) {
  this.name = name;
  this.health = health;
  this.attackPower = attackPower;
  this.defensePower = defensePower;
  this.isDie = false;
}

Fighter.prototype.attack = function(enemy) {
  // it should be this, but it's not working
  // if (this.constructor.name === enemy.constructor.name) {
  if (this.name === enemy.name) {
    console.log('Cannot attack same entity');
    return;
  }

  if (enemy.isDie){
    console.log('Cannot attack dead entity');
    return;
  }


  var damage = this.attackPower - enemy.defensePower;

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

function Monster(name, health, attackPower, defensePower) {
  Fighter.call(this, name, health, attackPower, defensePower);
}

Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;


function Hero(name, health, attackPower, defensePower) {
  Fighter.call(this, name, health, attackPower, defensePower);
}

Hero.prototype = Object.create(Fighter.prototype);
Hero.prototype.constructor = Hero;
Hero.prototype.sayHello = function() {
  console.log('My name is ' + this.name + '! I am a mighty hero!');
};

function main() {
  var link = new Hero('Link', 100, 45, 5);
  var ganon = new Monster('Ganon', 100, 25, 15);

  link.sayHello();

  link.attack(ganon);
  ganon.attack(link);
  link.attack(ganon);
  link.attack(ganon);
  link.attack(ganon);
}

main();
