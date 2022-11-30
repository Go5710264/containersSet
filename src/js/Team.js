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
  }

  toArray() {
    this.members.entries();
    /*  в данном пункте задания необходимо изменить Set на массив
    или создать новую переменную с массивом? */
  }
}
