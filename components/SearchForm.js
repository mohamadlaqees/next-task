"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchStatus from "./SearchStatus";

const SearchForm = ({ initialQuery }) => {
  const [input, setInput] = useState(initialQuery);
  const router = useRouter();

  const searchHandler = async (e) => {
    e.preventDefault();
    router.push(`/?q=${encodeURIComponent(input)}`);
  };
  return (
    <form onSubmit={searchHandler} className="flex">
      <input
        onChange={(e) => setInput(e.target.value)}
        name="searchUser"
        type="text"
        placeholder="Search for users"
        className="border-2 border-gray-500 rounded-2xl pl-2 pr-20 py-1"
      />
      <SearchStatus />
    </form>
  );
};

export default SearchForm;
