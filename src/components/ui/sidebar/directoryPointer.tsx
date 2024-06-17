"use client";
import { HomeIcon } from "@/components/icons/basic";
import { DirectoryPointerProps } from "@/types/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DirectoryPointer() {
  const location = usePathname();

  let locationData: DirectoryPointerProps;

  switch (location) {
    case "/dashboard":
      locationData = { name: "Dashboard", icon: () => <HomeIcon /> };
      break;

    default:
      locationData = { name: "Dashboard", icon: () => <HomeIcon /> };
      break;
  }

  const { name, icon } = locationData;

  return (
    <Link href={location} className="app-directory-pointer">
      {icon()}
      <span className="side-text">{name}</span>
    </Link>
  );
}
