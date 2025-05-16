import Bowman from '../src/Bowman';

describe('Bowman class', () => {
  test('should create a valid Bowman', () => {
    const bowman = new Bowman('Archer');
    expect(bowman.name).toBe('Archer');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});