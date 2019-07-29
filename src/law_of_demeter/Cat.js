class Cat {
  constructor(name, color, happiness) {
    this.name = name;
    this.color = color;
    this.happiness = happiness;
  }

  setHappiness(newMood) {
    this.happiness = newMood;
  }
}

module.exports = Cat;
