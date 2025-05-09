import Link from "next/link";
import React from "react";

const UsersList = ({ users }) => {
  return (
    <ul className="space-y-4 px-4 py-10">
      {users?.map((user) => (
        <li
          key={user.id}
          className="w-full max-w-xl mx-auto p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-white border border-white/20 hover:scale-[1.02] transition-transform"
        >
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">
              <span className="text-gray-300">Name:</span> {user.name}
            </p>
            <Link
              href={`/details/${user.id}`}
              className="border-2 border-gray-500 self-end text-sm text-white bg-gradient-to-r from-white-500 via-gray-500 to-black-500 px-4 py-2 rounded-md hover:brightness-110 transition-all"
            >
              View Details →
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
