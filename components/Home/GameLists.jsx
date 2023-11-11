"use client";
import React from "react";
import Image from "next/image";
import Data from "@shared/Data";
import { useState, useEffect } from "react";
const GameLists = ({ onGamePress }) => {
  const [games, setGames] = useState();
  useEffect(() => {
    setGames(Data.GameList);
  }, []);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4 mx-6">
      {games?.map((item) => (
        <div
          key={item?.id}
          className="flex items-center flex-col cursor-pointer "
          onClick={() => onGamePress(item.name)}
        >
          <img
            src={item?.image}
            alt="Sports"
            width={45}
            height={45}
            className="hover:animate-bounce transition-all duration-150 "
          />
          <h2 className="text-[14px] text-center">{item?.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GameLists;
