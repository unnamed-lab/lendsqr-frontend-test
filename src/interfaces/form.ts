import { TLoginData, TLoginValidation } from "@/types/form";
import { Dispatch, SetStateAction } from "react";

export interface InputFieldProps {
  label?: string;
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  errorMsg?: string;
  type: "email" | "text" | "number" | "password" | "url" | "search" | "tel";
  getData: Dispatch<SetStateAction<TLoginData>>;
  required?: boolean;
  pattern?: RegExp;
  checkValidation?: Dispatch<SetStateAction<TLoginValidation>>;
  isValid?: boolean
  min?: string | number;
  max?: string | number;
  minLength?: number;
  maxLength?: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
}
