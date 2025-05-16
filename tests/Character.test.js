import Character from '../src/Character';

describe('Character class', () => {
  test('should create a valid character', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Character('H', 'Bowman')).toThrow(
      'Invalid name. Name must be a string with length between 2 and 10 characters.'
    );
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow(
      'Invalid name. Name must be a string with length between 2 and 10 characters.'
    );
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow(
      'Invalid type.'
    );
  });

  test('should set correct attack and defence for all character types', () => {
    const bowman = new Character('Archer', 'Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);

    const swordsman = new Character('Warrior', 'Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);

    const magician = new Character('Mage', 'Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);

    const daemon = new Character('Demon', 'Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);

    const undead = new Character('Ghost', 'Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);

    const zombie = new Character('Walker', 'Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test('should level up correctly', () => {
    const character = new Character('Hero', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  test('should level up correctly for all character types', () => {
    const swordsman = new Character('Warrior', 'Swordsman');
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
    expect(swordsman.attack).toBe(48);
    expect(swordsman.defence).toBe(12);
    expect(swordsman.health).toBe(100);

    const magician = new Character('Mage', 'Magician');
    magician.levelUp();
    expect(magician.level).toBe(2);
    expect(magician.attack).toBe(12);
    expect(magician.defence).toBe(48);
    expect(magician.health).toBe(100);
  });

  test('should throw an error when leveling up a dead character', () => {
    const character = new Character('Hero', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Cannot level up a dead character.');
  });

test('should handle damage correctly for different health values', () => {
  const character = new Character('Hero', 'Bowman');
    character.damage(30);
    expect(character.health).toBeCloseTo(77.5);
});

test('should not allow damage to a dead character', () => {
  const character = new Character('Hero', 'Bowman');
  character.health = 0;
  character.damage(50);
  expect(character.health).toBe(0);
});
});