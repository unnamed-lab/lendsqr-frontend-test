"use client";

import {
  GoToPaginationProps,
  PaginationArray,
  PaginationSectionProps,
  SortPaginationProps,
} from "@/types/dashboard";
import { ChangeEvent, useEffect, useState } from "react";

export default function Pagination({
  pages,
  setRange,
  setPosition,
}: PaginationSectionProps) {
  const [rangeValue, setRangeSelect] = useState<number>(10);

  useEffect(() => {
    setRange(rangeValue);
  }, [rangeValue, setRange]);

  return (
    <section className="app-dashboard_data_pagination">
      <SortPagination pages={pages} setRange={setRangeSelect} />
      <GoToPagination
        range={rangeValue}
        pages={pages}
        getPosition={setPosition}
      />
    </section>
  );
}

function SortPagination({ pages, setRange }: SortPaginationProps) {
  let variant: number[] = [10];
  for (let i = 0; i <= pages; i++) {
    if (i > 10 && i % 10 === 0) variant.push(i);
  }

  const handleRangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setRange(Number(e.target.value));
  };

  return (
    <div className="app-dashboard_data_pagination_sort">
      Showing{" "}
      <select className="pagination-select" onChange={handleRangeSelect}>
        {variant.map((el, i) => {
          return (
            <option key={i} value={el} defaultValue={i == 0 ? el : undefined}>
              {el}
            </option>
          );
        })}
      </select>{" "}
      out of {pages}
    </div>
  );
}

function GoToPagination({ range, pages, getPosition }: GoToPaginationProps) {
  const divisons = pages / range;
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    getPosition(position);
  }, [getPosition, position]);

  const handlePrev = () => {
    if (position > 0) setPosition((prev) => prev - 1);
  };

  const handleNext = () => {
    if (position < divisons - 1) setPosition((prev) => prev + 1);
  };

  const handleNumber = (value: number | string) => {
    let input = typeof value === "string" ? position + 1 : value;
    if (input < divisons ) setPosition(input);
  };

  //  I apologies for this amateur codebase
  let pageRedirect: PaginationArray = Array.from(
    { length: divisons },
    (_, i) => i + 1,
  );

  let pageForward: PaginationArray = pageRedirect.filter((el, i, arr) => {
    if (el <= arr[2]) {
      return el;
    }
  });

  let pageBackward: PaginationArray = pageRedirect
    .reverse()
    .filter((el, i, arr) => {
      if (el >= arr[1]) {
        return el;
      }
    })
    .reverse();

  let pageNumber = [
    ...(divisons > 1 ? [...pageForward] : [1]),
    ...(divisons > 4 ? ["...", ...pageBackward] : []),
  ];

  return (
    <div className="app-dashboard_data_pagination_nav">
      <NavigationButton key={"prev"} type="prev" handler={handlePrev} />
      {pageNumber.map((el, i) => {
        return <NavigationNumber key={i} text={el} handler={handleNumber} />;
      })}
      <NavigationButton key={"next"} type="next" handler={handleNext} />
    </div>
  );
}

function NavigationNumber({
  text,
  handler,
}: {
  text: number | string;
  handler: (num: number | string) => void;
}) {
  const value = text === "..." ? "..." : Number(text) - 1;
  return (
    <button
      type="button"
      className="navigation-number"
      onClick={() => handler(value)}
    >
      {text}
    </button>
  );
}

function NavigationButton({
  type,
  handler,
}: {
  type: "next" | "prev";
  handler: () => void;
}) {
  const icon =
    type === "next" ? (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.99391 2.94274C3.15281 2.10165 4.45656 0.840502 5.255 1.68165L10.0058 6.43241C10.3842 6.76873 10.3842 7.35718 10.0058 7.6935L5.38142 12.36C4.54033 13.159 3.27918 11.8973 4.12033 11.0568L8.1141 7.063L3.99391 2.94274Z"
          fill="#213F7D"
        />
      </svg>
    ) : (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6">
          <path
            d="M10.0061 11.0573C10.8472 11.8984 9.54344 13.1595 8.745 12.3184L3.99424 7.56759C3.61581 7.23127 3.61581 6.64282 3.99424 6.3065L8.61858 1.64002C9.45967 0.841037 10.7208 2.10267 9.87967 2.94322L5.8859 6.937L10.0061 11.0573Z"
            fill="#213F7D"
          />
        </g>
      </svg>
    );

  return (
    <button type="button" className="navigation-btn" onClick={handler}>
      {icon}
    </button>
  );
}
