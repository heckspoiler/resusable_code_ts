import fs from 'fs';

export abstract class CsvFileReader<T> {
  // <T> makes this class a generic class (it's like an argument that gets passed in). "T" is customary for the name of the "argument", but it could be named whatever
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
