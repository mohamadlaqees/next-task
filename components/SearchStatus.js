import React from "react";
import { useFormStatus } from "react-dom";
import Loading from "./Loading";

const SearchStatus = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center gap-1.5 bg-gray-500 text-white rounded-2xl ml-4 py-1 px-8 cursor-pointer hover:brightness-130 transition-all"
    >
      <p>Search</p> {pending && <Loading />}
    </button>
  );
};

export default SearchStatus;
