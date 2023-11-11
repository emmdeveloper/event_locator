"use client";
import React from "react";
import { useState } from "react";
const Search = ({ userInput, searchText, setSearchText }) => {
  const searchButtonClick = () => {
    console.log("Search :", searchText);
  };
  return (
    <div className="mt-7 sm:mx-32">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-5oo"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm
         shadow
         rounded-full
          bg-gray-50

         "
          placeholder="Search with ZipCode"
          required
          onChange={(text) => setSearchText(text.target.value)}
        />
        <button
          type="submit"
          onClick={() => userInput(searchText)}
          className="text-white absolute right-2.5 bottom-2.5 bg-[#F96A5C] shadow   focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
