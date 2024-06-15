export const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/u; //  Basic Email Address Validation (Unicode Support)

export const passwordRegExp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/; //  At least one uppercase letter, one lowercase letter, one number, and one special character

/*
^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{8,}$    -   At least one uppercase letter, one lowercase letter, and one number (no specific special characters)

^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,}$    -   At least one uppercase letter, one lowercase letter, one number, and one special character (including symbols)
  */

/**
 *
 * @param pattern the regex pattern as string
 * @param input the value to be tested
 * @returns
 */
export const checkPattern = (pattern: RegExp, input: string): boolean => {
  console.log(pattern)
  return pattern.test(input) === true ? true : false;
};
