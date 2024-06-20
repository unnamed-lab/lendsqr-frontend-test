"use client";
import { CustomerSummary, DataContent } from "@/components/ui/dashboard";
import { TableDataList } from "@/types/dashboard";
import { useEffect, useState } from "react";
import users from "@/utils/users.json";
import { fetchDataFromApi } from "@/utils/getdata";

export default function Dashboard() {
  const [data, setData] = useState<TableDataList>( [],
  );
  const [user, setUser] = useState<number>(0);
  const [activeUser, setActiveUser] = useState<number>(0);
  const [loanUser, setLoanUser] = useState<number>(0);
  const [savingUser, setSavingUser] = useState<number>(0);

  useEffect(() => {
    fetchDataFromApi();
    const data = JSON.parse(localStorage.getItem("lendsqr")!);
    setData(data?.data)
  }, []);

  //  Get total users objects in the array
  useEffect(() => {
    if (data) {
      setUser(data.length);
    }
  }, [data]);

  //  Filter the users with the active status
  useEffect(() => {
    const active = data.filter((el) => {
      return el.status === "active";
    });
    setActiveUser(active.length);
  }, [data]);

  //  Filter users with repayment amount greater than zero
  useEffect(() => {
    const debt = data.filter((el) => {
      return el.repayment > 0;
    });

    setLoanUser(debt.length);
  }, [data]);

  //  Filter users whose (balance - repayment) is greater than zero
  useEffect(() => {
    const balance = data.filter((el) => {
      return el.balance - el.repayment > 0;
    });
    setSavingUser(balance.length);
  }, [data]);

  return (
    <section className="app-dashboard">
      <CustomerSummary
        users={user}
        activeUsers={activeUser}
        loan={loanUser}
        savings={savingUser}
      />
      <DataContent data={data} />
    </section>
  );
}
