"use client";
import { Button } from "@/components/form";
import { User } from "@/types/dashboard";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import UserPanel from "./userPanel";
import { currencyString } from "@/utils/formatter";

export default function UserContent({ data }: { data: User }) {
  const [panel, setPanel] = useState<number>(0);

  const { status } = data;
  return (
    <section className="app-dashboard_user">
      <BackLink />
      <EditUser status={status} />
      <UserProfile data={data} setPanel={setPanel} />
      <section className="app-dashboard_content">
        <UserPanel panel={panel} data={data} />
      </section>
    </section>
  );
}

function BackLink() {
  return (
    <Link href="/dashboard" className="backlink">
      <svg
        width="28"
        height="10"
        viewBox="0 0 28 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
          fill="#545F7D"
        />
      </svg>
      Back to Users
    </Link>
  );
}

function EditUser({ status }: { status: string }) {
  return (
    <section className="app-dashboard_user_header">
      <h1>User Details</h1>
      <div className="header-buttons">
        <Button className="cancel">Blacklist User</Button>
        {status !== "active" && (
          <Button className="activate">Activate User</Button>
        )}
      </div>
    </section>
  );
}

function UserProfile({
  data,
  setPanel,
}: {
  data: User;
  setPanel: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { id, name, image, tier, balance, bank, bvn } = data;

  let rating: React.JSX.Element;
  let amount = currencyString(balance)

  switch (tier) {
    case "bronze":
      rating = (
        <>
          <StarOutline />
          <StarOutline />
          <StarOutline />
        </>
      );
      break;

    case "silver":
      rating = (
        <>
          <StarFill />
          <StarOutline />
          <StarOutline />
        </>
      );
      break;

    case "gold":
      rating = (
        <>
          <StarFill />
          <StarFill />
          <StarOutline />
        </>
      );
      break;

    case "platium":
      rating = (
        <>
          <StarFill />
          <StarFill />
          <StarFill />
        </>
      );
      break;

    default:
      rating = (
        <>
          <StarOutline />
          <StarOutline />
          <StarOutline />
        </>
      );
      break;
  }
  return (
    <section className="app-dashboard_user_profile">
      <div className="profile-detail-section">
        <div className="profile-detail-section_user">
          <div className="profile-user">
            <div className="profile-image">
              {image ? (
                <Image src={image} alt={name} width={100} height={100} />
              ) : (
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.04053 35.1796C6.47961 32.2202 7.79365 29.6264 9.97961 27.4C12.7405 24.6 16.0732 23.2 19.9796 23.2C23.886 23.2 27.2204 24.6 29.9796 27.4C32.1796 29.6266 33.5062 32.2204 33.9593 35.1796M28.1405 14.0204C28.1405 16.247 27.3468 18.1532 25.7593 19.7408C24.1734 21.3408 22.253 22.1408 20.0001 22.1408C17.7594 22.1408 15.8409 21.3408 14.2409 19.7408C12.6534 18.1533 11.8596 16.247 11.8596 14.0204C11.8596 11.7673 12.6534 9.84679 14.2409 8.25959C15.8409 6.67367 17.7596 5.87991 20.0001 5.87991C22.2532 5.87991 24.1737 6.67367 25.7593 8.25959C27.3468 9.84711 28.1405 11.7674 28.1405 14.0204Z"
                      stroke="#213F7D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
            <div className="profile-info">
              <h1>{name}</h1>
              <p>{id}</p>
            </div>
            <div className="profile-rating">
              <h1>User’s Tier</h1>
              <div className="rating">{rating}</div>
            </div>
          </div>
          <div className="profile-balance">
            <h1>₦{amount}</h1>
            <p>
              {bvn}/{bank}
            </p>
          </div>
        </div>
        <MenuTab setPanel={setPanel} />
      </div>
    </section>
  );
}

function MenuTab({
  setPanel,
}: {
  setPanel: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [activeMenu, setActiveMenu] = useState<number>(0);

  useEffect(() => {
    setPanel(activeMenu);
  }, [activeMenu]);

  const menu = [
    { title: "general details" },
    { title: "documents" },
    { title: "bank details" },
    { title: "loans" },
    { title: "settings" },
    { title: "app system" },
  ];
  return (
    <div className="profile-detail-section_menu">
      {menu.map((el, i) => {
        return (
          <MenuTableButton
            key={i}
            handler={() => setActiveMenu(i)}
            title={el.title}
            isActive={activeMenu === i}
          />
        );
      })}
    </div>
  );
}

function MenuTableButton({
  handler,
  title,
  isActive,
}: {
  handler?: () => void;
  title: string;
  isActive: boolean;
}) {
  return (
    <button
      type="button"
      onClick={handler}
      className={`menu-btn ${isActive ? "active" : ""}`}
    >
      {title}
    </button>
  );
}

function StarFill() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z"
        fill="#E9B200"
      />
    </svg>
  );
}

function StarOutline() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5530_1562)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
          fill="#E9B200"
        />
      </g>
      <defs>
        <clipPath id="clip0_5530_1562">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
