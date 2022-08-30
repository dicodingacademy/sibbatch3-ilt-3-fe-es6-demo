import Monster from './Monster.js';
import Hero from './Hero.js';

function main() {
  const link = new Hero({
    name: 'Link',
    health: 100,
    attackPower: 45,
    defensePower: 5,
  });
  const ganon = new Monster({
    name: 'Ganon',
    health: 100,
    attackPower: 25,
    defensePower: 15,
  });

  link.sayHello();

  link.attack(ganon);
  ganon.attack(link);
  link.attack(ganon);
  link.attack(ganon);
  link.attack(ganon);
}

main();
