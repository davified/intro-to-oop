class Cat {
  constructor(name, color, mood) {
    this.name = name;
    this.color = color;
    this.mood = mood;
  }

  setMood(newMood) {
    this.mood = newMood;
  }
}

module.exports = Cat;
