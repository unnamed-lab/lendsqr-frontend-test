"use client";
import { TableDataList, TableDataProps, TUserId } from "@/types/dashboard";
import { Suspense, useState } from "react";
import EditData from "./editData";
import ModalBackdrop from "./modalBackdrop";
import { useRouter } from "next/navigation";
import FilterData from "./filterData";
import { TableHeadProps } from "@/interfaces/dashboard";

export default function DataTable({
  data,
  items,
}: {
  data: TableDataList;
  items: number;
}) {
  return (
    <section className="app-dashboard_data_table">
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {data
            .filter((el, i) => {
              if (i <= items - 1) return el;
            })
            .map((el, i, arr) => {
              return (
                <Suspense key={i} fallback={<TableBodyItemSuspense key={i} />}>
                  <TableBodyItem key={i} {...el} />
                </Suspense>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}

function TableBodyItem({
  id,
  organisation,
  username,
  email,
  mobile,
  date,
  status,
}: TableDataProps) {
  const datetime =
    typeof date !== "string" ? new Date(date).toLocaleDateString() : date;
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/dashboard/${id}`);
  };
  return (
    <tr>
      <td onClick={handleRedirect} style={{ textTransform: "capitalize" }}>
        {organisation}
      </td>
      <td onClick={handleRedirect}>{username}</td>
      <td onClick={handleRedirect}>{email}</td>
      <td onClick={handleRedirect}>{mobile}</td>
      <td onClick={handleRedirect}>{datetime}</td>
      <td onClick={handleRedirect}>
        <StatusBadge stat={status} />
      </td>
      <td>
        <ToggleButton id={id} />
      </td>
    </tr>
  );
}

function TableBodyItemSuspense() {
  return (
    <tr className="item-loading">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
}

function StatusBadge({ stat }: { stat: string }) {
  return <div className={`badge ${stat}`}>{stat}</div>;
}

function ToggleButton({ id }: { id: TUserId }) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => setIsActive((prev) => !prev);
  return (
    <>
      <button type="button" className="toggle-btn" onClick={handleClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5530_2613)">
            <path
              d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z"
              fill="#545F7D"
            />
          </g>
          <defs>
            <clipPath id="clip0_5530_2613">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <EditData id={id} state={isActive} />
      <ModalBackdrop state={isActive} handler={handleClick} />
    </>
  );
}

function TableHead() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => setIsActive((prev) => !prev);
  return (
    <>
      <tr>
        <TableHeadItem handler={handleClick} text="organisation" />
        <TableHeadItem handler={handleClick} text="username" />
        <TableHeadItem handler={handleClick} text="email" />
        <TableHeadItem handler={handleClick} text="phone number" />
        <TableHeadItem handler={handleClick} text="date joined" />
        <TableHeadItem handler={handleClick} text="status" />
        <TableHeadItem text="" icon={false} />
      </tr>
      <FilterData state={isActive} />
    </>
  );
}

function TableHeadItem({ text, icon = true, handler }: TableHeadProps) {
  return (
    <td onClick={handler}>
      {text}
      {icon ? <FilterIcon handler={handler!} /> : ""}
    </td>
  );
}

function FilterIcon({ handler }: { handler: () => void }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handler}
    >
      <path
        d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
        fill="#545F7D"
      />
    </svg>
  );
}
