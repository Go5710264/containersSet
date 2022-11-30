export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(companion) {
    if (this.members.has(companion)) {
      throw new Error('Персонаж состоит в группе');
    } else {
      return this.members.add(companion);
    }
  }

  addAll(...fullParty) {
    fullParty.forEach((char) => this.members.add(char));
    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
