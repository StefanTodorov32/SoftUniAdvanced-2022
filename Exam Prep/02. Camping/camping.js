class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }
  registerParticipant(name, condition, money) {
    let defaultConditions = ["child", "student", "collegian"];
    if (!defaultConditions.includes(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    let part = this.listOfParticipants.find((x) => x.name === name);
    if (part) {
      return `The ${name} is already registered at the camp.`;
    }
    let canPay = money < this.priceForTheCamp[condition] ? true : false;
    if (canPay) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }
  unregisterParticipant(name) {
    let index = 0;
    let part = this.listOfParticipants.filter((x, i) => {
      index = i;
      return x.name === name;
    })[0];
    if (!part) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants.splice(index, 1);
    return `The ${name} removed successfully.`;
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    let part1 = this.listOfParticipants.filter(
      (x) => x.name === participant1
    )[0];
    if (part1 === -1) {
      return `Invalid entered name/s.`;
    }
    if (participant1 && participant2) {
      let part2 = this.listOfParticipants.filter(
        (x) => x.name === participant2
      )[0];
      if (part2 === -1) {
        throw new Error(`Invalid entered name/s.`);
      }
      let isEqual = part1.condition === part2.condition ? true : false;
      if (!isEqual) {
        throw new Error(`Choose players with equal condition.`);
      }
      if (part1.power > part2.power) {
        part1.wins++;
        return `The ${part1.name} is winner in the game ${typeOfGame}.`;
      } else if (part1.power < part2.power) {
        part2.wins++;
        return `The ${part2.name} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    } else {
      part1.power += 20;
      return `The ${part1.name} successfully completed the game ${typeOfGame}.`;
    }
  }
  toString() {
    let res = [];
    res.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );
    this.listOfParticipants.sort((a, b) => b.wins - a.wins);
    this.listOfParticipants.map((x) =>
      res.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
    );
    return res.join("\n").trim();
  }
}
const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Sara Dickinson"
  )
);
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);
console.log(summerCamp.toString());
