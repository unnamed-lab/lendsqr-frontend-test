"use client";

import { TableDataList } from "@/types/dashboard";
import Pagination from "./dataPagination";
import DataTable from "./dataTable";
import { useEffect, useRef, useState } from "react";
import users from "@/utils/users.json";

export default function DataContent() {
  const [data, setData] = useState<TableDataList>(users);
  const [itemList, setItemList] = useState<number>(10);
  const [collection, setCollection] = useState<Array<User[]>>([]);
  const [position, setPosition] = useState<number>(0);
  const [tableData, setTableData] = useState<TableDataList>([]);

  function formatArray(array: User[], count: number) {
    const newArray: Array<User[]> = [];
    for (let i = 0; i < array.length; i += count) {
      newArray.push(array.slice(i, i + count));
    }
    return newArray;
  }

  useEffect(() => {
    const formatedArray = formatArray(data, itemList);
    setCollection(formatedArray);
  }, [data, itemList]);

  useEffect(() => {
    const currentArray = collection[position] || [];
    if (collection) setTableData(currentArray);
  }, [collection, position]);

  return (
    <section className="app-dashboard_data">
      <DataTable data={tableData} items={itemList} />
      <Pagination
        pages={data.length}
        setRange={setItemList}
        setPosition={setPosition}
      />
    </section>
  );
}
