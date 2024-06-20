"use client";
import { useState, useEffect } from "react";
import users from "@/utils/users.json";
import { User } from "@/types/dashboard";
import { UserDynamic } from "@/interfaces/dashboard";
import { UserContent } from "@/components/ui/dashboard";
import { fetchDataFromApi } from "@/utils/getdata";

export default function Page({ params }: UserDynamic) {
  const [data, setData] = useState<User[]>(users);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lendsqr")!);
    if (!data) {
      fetchDataFromApi();
      setData(data?.data);
    }
  }, []);

  const user = data.filter((el) => {
    return el.id === params.id;
  })[0];

  return (
    <section className="app-dashboard">
      <UserContent data={user} />
    </section>
  );
}
