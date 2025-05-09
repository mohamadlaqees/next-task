"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = ({ initialQuery }) => {
  const [input, setInput] = useState(initialQuery);
  const router = useRouter();

  const searchHandler = async (e) => {
    e.preventDefault();
    router.push(`/?q=${encodeURIComponent(input)}`);
  };
  return (
    <form onSubmit={searchHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        name="searchUser"
        type="text"
        placeholder="Search for users"
        className="border-2 border-gray-500 rounded-2xl pl-2 pr-20 py-1"
      />
      <button
        type="submit"
        className="bg-gray-500 text-white rounded-2xl ml-4 py-1 px-8 cursor-pointer hover:brightness-130 transition-all"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
