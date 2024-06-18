"use client";

import { TableDataList } from "@/types/dashboard";
import Pagination from "./dataPagination";
import DataTable from "./dataTable";
import { useState } from "react";

export default function DataContent() {
  const mockData: TableDataList = [
    {
      id: 1,
      organisation: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      mobile: "08078903721",
      date: "May 15, 2020 10:00 AM",
      status: "inactive",
    },
    {
      id: 2,
      organisation: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      mobile: "08160780928",
      date: "Apr 30, 2020 10:00 AM",
      status: "pending",
    },
    {
      id: 3,
      organisation: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      mobile: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      id: 4,
      organisation: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      mobile: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "pending",
    },
    {
      id: 5,
      organisation: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      mobile: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "active",
    },
    {
      id: 6,
      organisation: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      mobile: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "active",
    },
    {
      id: 7,
      organisation: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      mobile: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "blacklisted",
    },
    {
      id: 8,
      organisation: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      mobile: "07003309226",
      date: "Apr 10, 2020 10:00 AM",
      status: "inactive",
    },
    {
      id: 9,
      organisation: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      mobile: "07060780922",
      date: "Apr 30, 2020 10:00 AM",
      status: "inactive",
    },

    // Extra items because why not?! :)

    {
      id: 10,
      organisation: "QuickCredit",
      username: "James Holden",
      email: "james@quickcredit.com",
      mobile: "08012345678",
      date: "Jun 18, 2024 10:00 AM",
      status: "active",
    },
    {
      id: 11,
      organisation: "PayLater",
      username: "Naomi Nagata",
      email: "naomi@paylater.com",
      mobile: "08087654321",
      date: "Jun 17, 2024 10:00 AM",
      status: "pending",
    },
    {
      id: 12,
      organisation: "MoneyYard",
      username: "Amos Burton",
      email: "amos@moneyyard.com",
      mobile: "08123456789",
      date: "Jun 16, 2024 10:00 AM",
      status: "blacklisted",
    },
    {
      id: 13,
      organisation: "CashNet",
      username: "Alex Kamal",
      email: "alex@cashnet.com",
      mobile: "08198765432",
      date: "Jun 15, 2024 10:00 AM",
      status: "inactive",
    },
  ];
  const [itemList, setItemList] = useState<number>(10);

  const [tableData, setTableData] = useState<TableDataList>(mockData || []);

  return (
    <section className="app-dashboard_data">
      <DataTable data={tableData} items={itemList} />
      {/* <Pagination pages={tableData.length} setRange={setItemList} /> */}
    </section>
  );
}
