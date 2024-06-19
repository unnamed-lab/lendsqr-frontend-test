"use client";
import { useState } from "react";
import { User } from "@/types/dashboard";
import users from "@/utils/users.json";
import { UserDynamic } from "@/interfaces/dashboard";

export default function Page({ params }: UserDynamic) {
  const [data, setData] = useState<User[]>(users);

  const user = data.filter((el) => {
    return el.id === params.id;
  })[0];

  return (
    <div>
      User {user.id}: {user.name}
    </div>
  );
}
