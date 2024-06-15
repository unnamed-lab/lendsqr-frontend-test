import { checkPattern, emailRegExp, passwordRegExp } from "../validate.form";

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

describe("run test for email validation", () => {
  const rightEmail = "adebayo.anuoluwa02@gmail.com";
  const wrongEmail = "emailaddress@something";

  test("should validate the right email address", () => {
    const vaildate = checkPattern(emailRegExp, rightEmail);
    expect(vaildate).toBeTruthy();
  });

  test("should not validate wrong email address", () => {
    const validate = checkPattern(emailRegExp, wrongEmail);
    expect(validate).toBeFalsy();
  });
});

describe("run test for password validation", () => {
  const rightPassword = "Pa$$w0rd?";
  const wrongPassword1 = "Mystr0ngPassword";
  const wrongPassword2 = "d0nuT?";

  test("should validate the right password pattern", () => {
    expect(checkPattern(passwordRegExp, rightPassword)).toBeTruthy();
  });

  test("should not validate the wrong password pattern (looks strong)", () => {
    expect(checkPattern(passwordRegExp, wrongPassword1)).toBeFalsy();
  });

  test("should not validate the wrong password pattern (looks weak)", () => {
    expect(checkPattern(passwordRegExp, wrongPassword2)).toBeFalsy();
  });
});
