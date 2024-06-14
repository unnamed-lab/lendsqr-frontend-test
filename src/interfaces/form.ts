import { TLoginData } from "@/types/form";
import { Dispatch, SetStateAction } from "react";

export interface InputFieldProps {
  label?: string;
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  type: "email" | "text" | "number" | "password" | "url" | "search" | "tel";
  getData: Dispatch<SetStateAction<TLoginData>>;
}

export interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset"  | "button";
  className?: string;
}