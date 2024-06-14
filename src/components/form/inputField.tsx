"use client";

import { InputFieldProps } from "@/interfaces/form";
import { useEffect, useState } from "react";
import styles from "@/styles/css/page.module.css";

function InputField({
  label,
  className,
  id,
  name,
  placeholder,
  type = "text",
  getData,
}: InputFieldProps) {
  const identifier = id ? id : `${name}Id`;
  const [currentType, setCurrentType] = useState<InputFieldProps["type"]>(type);
  const [inputData, setInputData] = useState<string>("");
  const isPassword =
    type === "password" ? "input-field input-field_password" : "input-field";

  useEffect(() => {
    getData((prev) => ({ ...prev, [name]: inputData }));
  }, [inputData, name, getData]);

  const handleChangeType = () => {
    if (currentType !== "password") {
      setCurrentType("password");
    } else {
      setCurrentType("text");
    }
  };

  return (
    <div className="input-group">
      {label && <label htmlFor={identifier}></label>}
      <div className="input-container">
        <input
          type={currentType}
          className={
            isPassword + " " + (typeof className === "string" ? className : "")
          }
          id={identifier}
          placeholder={placeholder ? placeholder : "Input value in field"}
          name={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputData(e.target.value);
          }}
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
    </div>
  );
}

export default InputField;
