import { expect } from "chai";
import ScooterParsing from "../src/ScooterParsing";
const { readFile } = require("fs").promises;
import { inputResult, inputWithErrResult } from "../src/fixtures/results";

describe("ScooterParser Test", function() {
  let input: string;
  let inputWithErrors: string;
  let invalidInput: string;
  let parser: ScooterParsing;

  before(async function() {
    parser = new ScooterParsing();
    const file = await readFile(`${__dirname}/../src/fixtures/input.txt`, null);
    input = file.toString();
    const fileWithError = await readFile(`${__dirname}/../src/fixtures/inputWithErrors.txt`, null);
    inputWithErrors = fileWithError.toString();
    const invalidFile = await readFile(`${__dirname}/../src/fixtures/invalidInput.txt`, null);
    invalidInput = invalidFile.toString();
  });

  it("It Should Success", function() {
    const result = parser.GetDeviceInformations(input);
    expect(result).to.deep.equal(inputResult);
  });

  it("It Should Success for input with errors", function() {
    const result = parser.GetDeviceInformations(inputWithErrors);
    expect(result).to.deep.equal(inputWithErrResult);
    expect(result.result[0]).to.haveOwnProperty("imei");
    expect(result.result[0]["imei"]).to.be.equal("860861040012977");
    expect(result.result[1]["ECUFailure"]).to.be.equal("7");
  });

  it("It Should fail", function() {
    const result = parser.GetDeviceInformations(invalidInput);
    expect(result).to.be.equal(null);
  });

});
