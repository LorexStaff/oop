import Character from '../src/Character';

describe('Character class', () => {
  test('should create a valid character', () => {
    const character = new Character('Hero', 'Bowman', 25, 25);
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });

  test('should throw an error for invalid name', () => {
    expect(() => new Character('H', 'Bowman', 25, 25)).toThrow(
      'Invalid name. Name must be a string with length between 2 and 10 characters.'
    );
    expect(() => new Character('VeryLongName', 'Bowman', 25, 25)).toThrow(
      'Invalid name. Name must be a string with length between 2 and 10 characters.'
    );
  });

  test('should throw an error for invalid type', () => {
    expect(() => new Character('Hero', 'InvalidType', 25, 25)).toThrow(
      'Invalid type.'
    );
  });

  test('should level up correctly', () => {
    const character = new Character('Hero', 'Bowman', 25, 25);
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
    expect(character.health).toBe(100);
  });

  test('should throw an error when leveling up a dead character', () => {
    const character = new Character('Hero', 'Bowman', 25, 25);
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Cannot level up a dead character.');
  });

  test('should handle damage correctly for different health values', () => {
    const character = new Character('Hero', 'Bowman', 25, 25);

    character.damage(30);
    expect(character.health).toBeCloseTo(77.5);

    character.damage(100);
    expect(character.health).toBeCloseTo(2.5);
  });

  test('should not allow damage to a dead character', () => {
    const character = new Character('Hero', 'Bowman', 25, 25);
    character.health = 0;

    character.damage(50);
    expect(character.health).toBe(0);
  });
});