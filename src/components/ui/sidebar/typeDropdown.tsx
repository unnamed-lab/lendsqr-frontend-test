import { BriefcaseIcon } from "@/components/icons/basic";
import { TypeItemProps } from "@/types/sidebar";
import Link from "next/link";

//  I planned on constructing a custom dropdown but no tume for that right now :(

export default function TypeDropdown() {
  const dashboardType = [
    { name: "organisation", icon: () => <BriefcaseIcon />, url: "/dashboard" },
    { name: "personal", icon: () => <BriefcaseIcon />, url: "/dashboard" },
  ];
  return (
    <div className="type-dropdown">
      <TypeItem {...dashboardType[0]} />
    </div>
  );
}

function TypeItem({ name, icon, url }: TypeItemProps) {
  const renderIcon = icon();
  return (
    <div className="type-dropdown_item">
      <Link href={url}>
        {renderIcon}
        <span className="side-text">{"Switch " + name}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="side-text"
        >
          <path
            d="M11.0573 3.9938C11.8984 3.15271 13.1595 4.45646 12.3184 5.25489L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38131C0.841037 4.54022 2.10267 3.27907 2.94322 4.12022L6.937 8.114L11.0573 3.9938Z"
            fill="#213F7D"
          />
        </svg>
      </Link>
    </div>
  );
}
