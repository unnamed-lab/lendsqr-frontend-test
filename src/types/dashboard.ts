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

export type GoToPaginationProps = {
  range: number;
  pages: number;
  getPosition: Dispatch<SetStateAction<number>>;
};

export type PaginationArray = (number | string)[];

export type TUserId = string | number;

export type PanelContainerProps = {
  title: string;
  data: { title: string; property: string | number }[];
};

// export type TableDataList = Array<TableDataProps>; // Not using this anymore :)
export type TableDataList = Array<User>;

export type PaginationSectionProps = {
  pages: number;
  setRange: Dispatch<SetStateAction<number>>;
  setPosition: Dispatch<SetStateAction<number>>;
};

export type EditDataItemProps = {
  id: TUserId;
  icon: (props?: IconProps) => JSX.Element;
  text: string;
};

export type User = {
  id: string;
  name: string;
  organisation: string;
  username: string;
  image: string;
  tier: string;
  mobile: string;
  email: string;
  date: string;
  status: string;
  bvn: number;
  gender: string;
  marital: string;
  children: number;
  residence: string;
  education: string;
  bank: string;
  minIncome: number;
  maxIncome: number;
  balance: number;
  repayment: number;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor: Guarantor[];
};

type Guarantor = {
  name: string;
  mobile: string;
  email: string;
  relationship: string;
};

export type TableDataProps = User;
