import { TUserId } from "@/types/dashboard";
import { CSSProperties } from "react";

export interface ModalProps {
  id?: TUserId;
  state: boolean;
}

export interface TableHeadProps {
  text: string;
  icon?: boolean;
  handler?: () => void;
}

// I don't know why this is still here 😂
export interface IUserId {
  readonly id: string | number;
}

export interface UserDynamic {
  params: { id: string };
}
