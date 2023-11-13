import { MatchReader } from './MatchReader';
import { CsvFileReader } from './inheritance/CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');

const reader = new MatchReader(csvFileReader);
MatchReader.load();

//enum --> enumeration

// what is a enu? they follow near-identical sntax rules as nomral objects (except for the = instead of doppelpunkt)
// creates an object with the same keys and values when converted from TS to JS. so if converted to JS, it turns into an object.
// primary goal is to signal to other engineers that these are all closely related values, there aren't big advantages to using enums when it comes to using TS compiler, it's mainly for signaling.
/* enums are used whenever we have a small fixed set of values that are all closely related and known at compile time, 
so we shouldn't/cannot add new values to the enum while executing the code. They should be pre-defined, before the code runs */

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(MatchReader.matches);
