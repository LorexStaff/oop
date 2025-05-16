export default class Character {
  constructor(name, type) {
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Invalid name. Name must be a string with length between 2 and 10 characters.');
    }

    if (!validTypes.includes(type)) {
      throw new Error('Invalid type.');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot level up a dead character.');
    }

    this.level += 1;
    this.attack = Math.round(this.attack * 1.2); 
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100; 
  }

  damage(points) {
    if (this.health === 0) {
      return; 
    }

    const rawDamage = points * (1 - this.defence / 100);
    this.health = Math.max(this.health - rawDamage, 0);
  }
}