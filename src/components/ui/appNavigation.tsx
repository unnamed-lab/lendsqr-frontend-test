"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, SearchField } from "../form";

export default function Navigation() {
  return (
    <nav className="app-navigation">
      <NavigationBrand />
      <NavigationDesktop />
    </nav>
  );
}

function NavigationDesktop() {
  return (
    <div className="app-navigation_desktop">
      <NavigationSearch />
      <NavigationMenu name="Adedeji" img="/userimage.png" />
    </div>
  );
}

function NavigationBrand() {
  return (
    <div className="app-navigation_brand">
      <Link href="/">
        <Image
          priority
          className={""}
          src="/brand.svg"
          alt="Lendsqr"
          width={100}
          height={30}
        />
      </Link>
    </div>
  );
}

function NavigationSearch() {
  return (
    <div className="app-navigation_search">
      <SearchField />
    </div>
  );
}

function NavigationMenu({ img, name }: { img: string; name: string }) {
  return (
    <div className="app-navigation_menu">
      <Link href="#" className="menu-text">
        Docs
      </Link>
      <Link href="#" className="menu-notify">
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7001 12.6913C17.718 15.5178 18.8518 18.2235 20.8584 20.2183C21.0327 20.3912 21.0856 20.6531 20.9916 20.8804L20.9912 20.8815C20.8964 21.107 20.676 21.2561 20.4284 21.2549M17.7001 12.6913L20.429 21.0549M17.7001 12.6913V12.5968V10.6642C17.7176 9.12752 17.2154 7.63071 16.275 6.41524C15.3984 5.28217 14.1892 4.45625 12.821 4.05095C13.2642 3.42355 13.3572 2.60324 13.0487 1.88438L13.0486 1.88426C12.6962 1.06444 11.8907 0.53333 10.9982 0.53333C10.1057 0.53333 9.30018 1.06444 8.94771 1.88426L8.94766 1.88438C8.63969 2.60199 8.73182 3.42065 9.17296 4.04761C7.82501 4.42985 6.62769 5.22584 5.75338 6.32787C4.81219 7.51196 4.30025 8.97972 4.30025 10.4925L4.30025 12.5968L4.30025 12.5973C4.30723 15.4578 3.17063 18.2015 1.14175 20.2183C0.967488 20.3912 0.914595 20.6531 1.00854 20.8804L1.00898 20.8814C1.10373 21.107 1.32419 21.2561 1.57172 21.2549M17.7001 12.6913L8.02208 21.2549M20.4284 21.2549C20.4282 21.2549 20.428 21.2549 20.4278 21.2549L20.429 21.0549M20.4284 21.2549H20.429V21.0549M20.4284 21.2549H13.9781M20.429 21.0549H13.8112M13.9781 21.2549C13.9899 21.1989 14.0002 21.1422 14.0089 21.085L13.8112 21.0549M13.9781 21.2549C13.6832 22.6549 12.4456 23.67 11.0001 23.67C9.55459 23.67 8.31709 22.6549 8.02208 21.2549M13.9781 21.2549H13.8112V21.0549M13.8112 21.0549L8.02208 21.2549M8.02208 21.2549H8.18896V21.0549L7.99125 21.0851C7.99999 21.1423 8.01028 21.1989 8.02208 21.2549ZM8.02208 21.2549H1.57172M1.57172 21.2549C1.57195 21.2549 1.57218 21.2549 1.57241 21.2549L1.57118 21.0549V21.2549H1.57172ZM12.7285 21.2549C12.4747 21.9799 11.7867 22.4798 11.0001 22.4798H11C10.2133 22.4798 9.52539 21.9799 9.27157 21.2549H12.7285ZM5.51233 10.4924L5.51233 10.4921C5.51037 8.98893 6.12478 7.55137 7.21241 6.51489L7.21249 6.51481C8.2998 5.47745 9.76426 4.93259 11.2651 5.00474C12.6959 5.09328 14.0376 5.73143 15.0099 6.78408L15.0099 6.78409C15.9834 7.83803 16.5119 9.2253 16.4874 10.6596L16.4873 10.6596V10.663L16.4873 12.5961C16.4873 12.5962 16.4873 12.5963 16.4873 12.5964C16.4786 15.3045 17.3944 17.9297 19.0743 20.0424H2.92542C4.60545 17.9296 5.52131 15.3045 5.51233 12.5964L5.51233 10.4924ZM11.0001 1.75485C11.4119 1.75485 11.7837 2.00277 11.9416 2.38396C12.0986 2.76431 12.012 3.20235 11.7209 3.49448C11.4287 3.7856 10.9906 3.87214 10.6103 3.71506C10.2292 3.5571 9.98134 3.1853 9.98134 2.7736C9.98134 2.21071 10.4372 1.75485 11.0001 1.75485Z"
            fill="#213F7D"
            stroke="#213F7D"
            strokeWidth="0.4"
          />
        </svg>
      </Link>
      <ProfileCard name={name} img={img} />
    </div>
  );
}

function ProfileCard({ img, name }: { img: string; name: string }) {
  return (
    <div className="profile-card">
      <div className="profile-card_thumbnail">
        {img && <Image src={img} alt="alt" width={48} height={48} />}
        <span>AA</span>
      </div>
      <div className="profile-card_info">
        {name}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z"
            fill="#213F7D"
          />
        </svg>
      </div>
    </div>
  );
}
