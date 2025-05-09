"use client";
import Link from "next/link";

const Error = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-white-500 via-gray-500 to-black-500 text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">Error</h1>
        <p className="mb-6 text-gray-400">{error.message}</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white text-black rounded-lg shadow hover:bg-gray-200 transition"
        >
          ← Go back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
