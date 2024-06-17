"use client";
import {
  BriefcaseIcon,
  ChartIcon,
  ClipboardIcon,
  CoinIcon,
  GalaxyIcon,
  HandshakeIcon,
  LendingIcon,
  MobileTransferIcon,
  MoneySackIcon,
  NPBankIcon,
  PercentIcon,
  PiggyBankIcon,
  ScrollIcon,
  SliderIcon,
  UserCancelIcon,
  UserCheckedIcon,
  UserCogIcon,
  UserGroupIcon,
  UserPeerIcon,
} from "@/components/icons/basic";
import { TMenuItem, TMenuList } from "@/types/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { title } from "process";

export default function MenuContainer() {
  const menu = [
    {
      title: "customers",
      items: [
        {
          name: "users",
          url: "/dashboard",
          icon: () => <UserPeerIcon />,
        },
        {
          name: "guarantors",
          url: "/",
          icon: () => <UserGroupIcon />,
        },
        {
          name: "loans",
          url: "/",
          icon: () => <MoneySackIcon />,
        },
        {
          name: "decision models",
          url: "/",
          icon: () => <HandshakeIcon />,
        },
        {
          name: "savings",
          url: "/",
          icon: () => <PiggyBankIcon />,
        },
        {
          name: "loan requests",
          url: "/",
          icon: () => <LendingIcon />,
        },
        {
          name: "whitelist",
          url: "/",
          icon: () => <UserCheckedIcon />,
        },
        {
          name: "karma",
          url: "/",
          icon: () => <UserCancelIcon />,
        },
      ],
    },

    {
      title: "businesses",
      items: [
        {
          name: "organization",
          url: "/",
          icon: () => <BriefcaseIcon />,
        },

        {
          name: "loan products",
          url: "/",
          icon: () => <LendingIcon />,
        },

        {
          name: "savings products",
          url: "/",
          icon: () => <NPBankIcon />,
        },

        {
          name: "fees and charges",
          url: "/",
          icon: () => <CoinIcon />,
        },

        {
          name: "transactions",
          url: "/",
          icon: () => <MobileTransferIcon />,
        },

        {
          name: "services",
          url: "/",
          icon: () => <GalaxyIcon />,
        },

        {
          name: "service account",
          url: "/",
          icon: () => <UserCogIcon />,
        },

        {
          name: "settlements",
          url: "/",
          icon: () => <ScrollIcon />,
        },

        {
          name: "reports",
          url: "/",
          icon: () => <ChartIcon />,
        },
      ],
    },

    {
      title: "settings",
      items: [
        {
          name: "preferences",
          url: "/",
          icon: () => <SliderIcon />,
        },
        {
          name: "fees and pricing",
          url: "/",
          icon: () => <PercentIcon />,
        },
        {
          name: "audit logs",
          url: "/",
          icon: () => <ClipboardIcon />,
        },
      ],
    },
  ];

  return (
    <div className="app-side-menu">
      {menu.map((el, i) => {
        return <MenuList key={i} {...el} />;
      })}
    </div>
  );
}

function MenuList({ title, items }: TMenuList) {
  return (
    <ul>
      <span className="side-text">{title}</span>
      {items.map((el, i) => {
        return <MenuItem key={i} {...el} />;
      })}
    </ul>
  );
}

function MenuItem({ name, url, icon, active = false }: TMenuItem) {
  return (
    <li className={url === usePathname() ? "active" : ""}>
      <Link href={url}>
        {icon()}
        <span className="side-text">{name}</span>
      </Link>
    </li>
  );
}
