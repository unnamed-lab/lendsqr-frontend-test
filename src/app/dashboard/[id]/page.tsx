"use client";
import { useState } from "react";
import users from "@/utils/users.json";
import { User } from "@/types/dashboard";
import { UserDynamic } from "@/interfaces/dashboard";
import { UserContent } from "@/components/ui/dashboard";

export default function Page({ params }: UserDynamic) {
  const [data, setData] = useState<User[]>(users);

  const user = data.filter((el) => {
    return el.id === params.id;
  })[0];

  return (
    <section className="app-dashboard">
      <UserContent data={user} />
    </section>
  );
}


