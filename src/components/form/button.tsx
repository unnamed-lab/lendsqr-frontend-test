import { ButtonProps } from "@/interfaces/form";

export default function Button({
  type = "button",
  className,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={
        "button" +
        " " +
        (typeof className !== "undefined" ? className : "")
      }
    >
      {children}
    </button>
  );
}
