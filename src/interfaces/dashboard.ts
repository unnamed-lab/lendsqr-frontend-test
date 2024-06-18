import { TUserId } from "@/types/dashboard";

export interface ModalProps {
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
