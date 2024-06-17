import { IconProps } from "@/interfaces/icons";

export type TypeItemProps = {
  name: string;
  url: string;
  icon: (props?: IconProps) => JSX.Element;
};

export type TypeDropdownProps = Array<TypeItemProps>;

export type DirectoryPointerProps = {
  name: string;
  icon: (props?: any) => JSX.Element;
};

export type TMenuItem = {
  name: string;
  url: string;
  icon: (props?: IconProps) => JSX.Element;
  active?: boolean;
};

export type TMenuList = {
  title: string;
  items: Array<TMenuItem> | [];
};
