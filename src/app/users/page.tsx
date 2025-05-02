import { User } from "@/types/user";
import Link from "next/link";
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

      <div className="!p-3 bg-amber-300 text-center font-extrabold">
        <code>Date: {new Date().toLocaleTimeString()}</code>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg !p-3">
        <table className="w-full text-left rtl:text-right">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-gray-700"
              >
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <Link
                    href={`/users/${user.id}`}
                    className="text-gray-600 bg-gray-200 hover:bg-gray-300 focus:ring-3 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
