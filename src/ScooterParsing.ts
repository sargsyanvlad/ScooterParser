import { iScooter } from "./types";
import { separator } from "./constants/";

export default class ScooterParsing {
  private reg = new RegExp(/^[+].*[$]$/igm);

  /**
  * The function matchString string argument check by Regular Expression and return array of strings or null.
  */
  private matchString(str: string): Array<string> | null {
    return str.match(this.reg);
  }

  /**
  * The function parseErrors accepts Array of string as argument.
  * and start separate that array in two parts,
  * then iterates over separated array, and start building err object and return it
  */
  /** this is part 2 */
  private parseErrors(input: Array<string>): { [key: string]: string } {
    const errObj = {};

    const result = new Array(Math.ceil(input.length / 2))
      .fill(Array)
      .map(_ => input.splice(1, 2));

    result.forEach(el => {
      if (el[1]) {
        errObj[el[1]] = el[0];
      }
    });
    return errObj;
  }

  /**
  * The function buildMatched accepts Array of string as argument.
  * and start building final object,
  */
  private buildMatched(input): iScooter.BuildMatchRes | [] {
    const arr = [];
    if (input && input.length) {

      input.forEach(el => {
        if (el[1] === "DeviceInfo") {
          /** this is part 1 START */
          const obj = {
            imei: el[2],
            batteryLevel: `${el[3]} %`,
            odometer: `${el[4]} km`,
            time: el[5],
          };

          arr.push(obj);
          /** this is part 1 END */
        } else {
          /** this is part 2 START */
          const errCount = Number(el[3]);

          if (!Number.isNaN(errCount)){
            const dateIndex = 4 + (errCount*2);
            const errObj = this.parseErrors(el.slice(3, dateIndex));
            const obj = {
              imei: el[2],
              time: el[dateIndex],
            };

            arr.push({ ...errObj, ...obj });
            /** this is part 2 END */
          }
        }
      });
    }
    return arr;
  }

  /**
  * The function separateMatched accepts Array of string as argument.
  * and start separate that array by separator defined in constants,
  */
  private separateMatched(input: Array<string>): Array<Array<string>> {
    return input.map(str => str.split(separator));
  }

  public GetDeviceInformations(payload: string): iScooter.Result | null {
    const matched = this.matchString(payload);

    if (matched) {
      const separated = this.separateMatched(matched);
      const res = this.buildMatched(separated);
      return { result: res };
    }
    return null;
  }
}
