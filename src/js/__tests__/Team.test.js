import Team from '../Team';
import Character from '../Character';

const archer = new Character('Seoma', 'kamael');
const healer = new Character('Dak1', 'darkElf');

test('creating a new character', () => {
  expect(archer).toEqual({
    name: 'Seoma',
    type: 'kamael',
  });
});

test('adding a character to a group', () => {
  expect(new Team().add(archer))
    .toEqual(new Set().add(archer));
});

test('re-adding a character to a group', () => {
  expect(() => {
    const newCharParty = new Team();
    newCharParty.add(archer);
    newCharParty.add(archer);
  }).toThrow(/^Персонаж состоит в группе$/);
});

test('adding many characters', () => {
  expect(new Team().addAll(archer, healer)).toEqual(new Set([archer, healer]));
});

test('getting an array of characters', () => {
  const newParty = new Team();
  newParty.addAll(archer, healer);
  expect(newParty.toArray()).toEqual([...new Set([archer, healer])]);
});
