import { User } from "@/types/user";
import React from "react";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      <div className="text-center font-bold text-green-600 text-3xl">
        Users List:
      </div>

      <div className="p-3 bg-amber-300 m-3">
        Date: {new Date().toLocaleTimeString()}
      </div>

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default UsersPage;
