import { DashboardIconProps } from "@/interfaces/icons";
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