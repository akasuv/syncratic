"use client";
import React, { useState } from "react";

type SearchInputProps = {
  placeholder?: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      className="py-2 pl-4 pr-4 rounded-3xl w-full md:w-[500px] text-gray-700  
         bg-white border border-black focus:border-black  
         focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
