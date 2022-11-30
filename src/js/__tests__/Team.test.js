import Team from '../Team';
import Character from '../Character';

const archer = new Character('Seoma', 'kamael');

test('creating a new character', () => {
  expect(archer).toEqual({
    name: 'Seoma',
    type: 'kamael' 
  })
});

test('adding a character to a group', () => {
  expect(new Team().add(archer))
  .toEqual(new Set().add(archer))
});

test('re-adding a character to a group', () => {
  const newCharParty = new Team().add(archer);
  newCharParty.add(archer);
  expect().toThrow(/^Персонаж состоит в группе$/)
});
