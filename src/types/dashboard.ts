import { IUserId } from "@/interfaces/dashboard";
import { DashboardIconProps, IconProps } from "@/interfaces/icons";
import { Dispatch, SetStateAction } from "react";

export type CustomerSummaryProps = {
  title: string;
  quantity: number;
  icon: (props?: DashboardIconProps) => JSX.Element;
};

export type CustomerSummaryArray = Array<CustomerSummaryProps>;

export type SortPaginationProps = {
  pages: number;
  setRange: Dispatch<SetStateAction<number>>;
};

export type GoToPaginationProps = { range: number; pages: number };

export type PaginationArray = (number | string)[];

export type TableDataProps = {
  readonly id: IUserId;
  readonly organisation: string;
  readonly username: string;
  readonly email: string;
  readonly mobile: string;
  readonly date: Date | string;
  readonly status: "active" | "inactive" | "pending" | "blacklisted";
};

export type TableDataList = Array<TableDataProps>;

export type PaginationSectionProps = {
  pages: number;
  setRange: Dispatch<SetStateAction<number>>;
};

export type EditDataItemProps = {
  id: IUserId;
  icon: (props?: IconProps) => JSX.Element;
  text: string;
};
