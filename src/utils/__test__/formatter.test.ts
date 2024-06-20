import { currencyString } from "../formatter";

describe("to test number to english written financial text format", () => {
  const numberInput = 1000.202;
  const stringInput = "1000.202";

  test("should return true on number input", () => {
    const input = currencyString(numberInput);
    expect(input).toBe("1,000.20")
  });

  test("should return true on string input", () => {
    const input = currencyString(stringInput);
    expect(input).toBe("1,000.20");
  });

  test("should return false if output is two decimal", () => {
    const input = currencyString(stringInput);
    expect(input).not.toBe("1,000.202")
  });
  
  test("should return false if output doesn't have commas", () => {
    const input = currencyString(stringInput);
    expect(input).not.toBe("1000.202");
  });
  
  test("should return false if output doesn't have commas and a decimal place", () => {
    const input = currencyString(stringInput);
    expect(input).not.toBe("1000");
  });

});
