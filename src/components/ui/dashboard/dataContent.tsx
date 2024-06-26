"use client";

import { TableDataList } from "@/types/dashboard";
import Pagination from "./dataPagination";
import DataTable from "./dataTable";
import { useEffect, useState } from "react";

export default function DataContent({ data }: { data: TableDataList }) {
  // const [data, setData] = useState<TableDataList>(users);
  const [itemList, setItemList] = useState<number>(10);
  const [collection, setCollection] = useState<Array<User[]>>([]);
  const [position, setPosition] = useState<number>(0);
  const [tableData, setTableData] = useState<TableDataList>([]);

  function formatArray(array: User[] | undefined, count: number) {
    if (typeof array === "undefined") {
      return [[]];
    }
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
        pages={data ? data.length : 0}
        setRange={setItemList}
        setPosition={setPosition}
      />
    </section>
  );
}
