import { DashboardIconProps } from "@/interfaces/icons";

export type CustomerSummaryProps = {
  title: string;
  quantity: number;
  icon: (props?: DashboardIconProps) => JSX.Element;
};

export type CustomerSummaryArray = Array<CustomerSummaryProps>;
