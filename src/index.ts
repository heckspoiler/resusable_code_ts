import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

//enum --> enumeration

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// what is a enu? they follow near-identical sntax rules as nomral objects (except for the = instead of doppelpunkt)
// creates an object with the same keys and values when converted from TS to JS. so if converted to JS, it turns into an object.
// primary goal is to signal to other engineers that these are all closely related values, there aren't big advantages to using enums when it comes to using TS compiler, it's mainly for signaling.
/* enums are used whenever we have a small fixed set of values that are all closely related and known at compile time, 
so we shouldn't/cannot add new values to the enum while executing the code. They should be pre-defined, before the code runs */

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`ManU won ${manUnitedWins} times, that's pretty fucking bad lel`);