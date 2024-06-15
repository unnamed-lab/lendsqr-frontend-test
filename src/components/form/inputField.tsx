"use client";

import { InputFieldProps } from "@/interfaces/form";
import { useEffect, useState } from "react";
import styles from "@/styles/css/page.module.css";
import { checkPattern } from "@/utils/validate.form";

/**
 *
 * @param label add input label text [optional]
 * @param className add custom class [optional]
 * @param id add unique identifier [optional]
 * @param name add name of the input field
 * @param placeholder add placeholder text
 * @param errorMsg add custom form error message
 * @param type set input field type
 * @param required make field compulsory to fill (default: false) [optional]
 * @param pattern create unique field pattern [optional]
 * @returns JSX.Element
 */
function InputField({
  label,
  className,
  id,
  name,
  placeholder,
  errorMsg = "Please fill in the right value in the field",
  type = "text",
  getData,
  required,
  pattern,
  checkValidation,
  isValid,
  min,
  max,
  minLength,
  maxLength,
}: InputFieldProps) {
  const identifier = id ? id : `${name}Id`;
  const [currentType, setCurrentType] = useState<InputFieldProps["type"]>(type);
  const [inputData, setInputData] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const isPassword =
    type === "password" ? "input-field input-field_password" : "input-field";

  useEffect(() => {
    getData((prev) => ({ ...prev, [name]: inputData }));
  }, [inputData, name, getData]);

  useEffect(() => {
    if (typeof isValid !== "undefined") setError(isValid);
    console.log("Is Valid: ", isValid);
  }, [isValid]);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (pattern && checkValidation) {
      const status = checkPattern(pattern, input);
      checkValidation((prev) => ({ ...prev, [e.target.name]: status }));
    }
    setInputData(input);
  };

  const handleChangeType = () => {
    if (currentType !== "password") {
      setCurrentType("password");
    } else {
      setCurrentType("text");
    }
  };

  return (
    <div className="input-group">
      {label && <label htmlFor={identifier} className="input-label"></label>}
      <div className="input-container">
        <input
          required={required}
          type={currentType}
          className={
            isPassword + " " + (typeof className === "string" ? className : "")
          }
          id={identifier}
          placeholder={placeholder ? placeholder : "Input value in field"}
          name={name}
          onChange={handleFieldChange}
          pattern={`${pattern}`}
          min={min}
          minLength={minLength}
          max={max}
          maxLength={maxLength}
          title={errorMsg}
        />

        {type === "password" && (
          <button
            type="button"
            className={
              currentType === "password"
                ? "input-field_password_toggle"
                : "input-field_password_toggle show"
            }
            onClick={handleChangeType}
          >
            Show
          </button>
        )}
      </div>
      {/* {typeof isValid !== "undefined" && !isValid && (
        <div className="input-error">{errorMsg}</div>
      )} */}
    </div>
  );
}

export default InputField;
