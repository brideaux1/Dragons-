class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragons) {
    return dragons.map((dragon) => dragon.name);
  }
}
module.exports = Dragon;

const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());

const otherDragon = new Dragon("Other", "red");
console.log(Dragon.getDragons(puff, toothless, otherDragon));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
