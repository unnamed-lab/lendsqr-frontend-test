import { checkPattern } from "../validate.form";

describe("run basic validator test", () => {
  const mockRegEx = /^(?:.{3,})$/;

  test("check if text with character greater than 3 is valid", () => {
    const valid = checkPattern(mockRegEx, "unnamedcodes");
    console.log(valid);
    expect(valid).toBeTruthy();
  });

  test("check if text with character less than 3 is invalid", () => {
    const valid = checkPattern(mockRegEx, "an");
    console.log(valid);

    expect(valid).toBeFalsy();
  });
});
