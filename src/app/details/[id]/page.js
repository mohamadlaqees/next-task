import React from "react";
import { getUser } from "../../../../lib/users";
import Link from "next/link";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const user = await getUser(params.id);
  if (!user) {
    notFound();
  }
  return (
    <div className="space-x-96 flex justify-center relative  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 text-center bg-gradient-to-r from-white-500 via-gray-500 to-black-500 rounded-2xl ">
      <div className="flex flex-col  items-start space-y-3">
        <p className="text-lg font-semibold">
          <span className="text-gray-300">Name:</span> {user.name}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-gray-300">age:</span> {user.age}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-gray-300">gender:</span> {user.gender}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-gray-300">email:</span> {user.email}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-gray-300">phone:</span> {user.phone}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-gray-300">address:</span> {user.address}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-gray-300">occupation:</span> {user.occupation}
        </p>
      </div>
      <Link
        href={"/"}
        className="border-2 border-gray-500 self-start text-sm text-white bg-gradient-to-r from-white-500 via-gray-500 to-black-500 px-4 py-2 rounded-md hover:brightness-110 transition-all"
      >
        ← back
      </Link>
    </div>
  );
};

export default page;
