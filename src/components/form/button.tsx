import { ButtonProps } from "@/interfaces/form";

export default function Button({
  type = "button",
  className,
  children,
}: ButtonProps) {
  return (
    <button type={type} className={"login-button" + " " + className}>
      {children}
    </button>
  );
}
