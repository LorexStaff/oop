import Bowman from '../src/Bowman';
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';
import Daemon from '../src/Daemon';
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';

describe('Child classes', () => {
  test('Bowman should have correct properties', () => {
    const bowman = new Bowman('Archer');
    expect(bowman.name).toBe('Archer');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('Swordsman should have correct properties', () => {
    const swordsman = new Swordsman('Warrior');
    expect(swordsman.name).toBe('Warrior');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician should have correct properties', () => {
    const magician = new Magician('Mage');
    expect(magician.name).toBe('Mage');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Daemon should have correct properties', () => {
    const daemon = new Daemon('Demon');
    expect(daemon.name).toBe('Demon');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Undead should have correct properties', () => {
    const undead = new Undead('Ghost');
    expect(undead.name).toBe('Ghost');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Zombie should have correct properties', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});