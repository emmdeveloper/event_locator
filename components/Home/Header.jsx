"use client";
import React from "react";
import Image from "next/image";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="sticky top-0 flex items-center justify-between z-30 p-2 bg-[#f6f1ed]">
      <div className="flex items-center justify-center">
        <Image
          src="/logo.jpg"
          width={90}
          height={90}
          alt="user-profile"
          priority
        />
        <h2 className="navbar_text text-black ff_Poppins font-medium">
          NinjaSports
        </h2>
      </div>
      <div className="flex items-center justify-between gap-2 ">
        <button className="rounded-full ml-1 px-1 whitespace-nowrap py-1 bg-[#f96a5c] text-white ff_Poppins text-sm hover:outline_btn ">
          <Link href="/create-event"> Create Event</Link>
        </button>
        {!session ? (
          <button
            type="button"
            className="rounded-full  px-3 py-1 bg-gray-700 text-white ff_Poppins text-sm"
            onClick={() => signIn()}
          >
            <span className="sm:block hidden"> Sign in</span>
            <HiArrowLeftOnRectangle
              className="sm:hidden block text-[20px]"
              title="sign in"
            />
          </button>
        ) : (
          <button
            type="button"
            className="rounded-full  px-3 py-1 bg-gray-700 text-white ff_Poppins text-sm"
            onClick={() => signOut()}
          >
            <span className="sm:block hidden"> Sign Out</span>
            <HiArrowLeftOnRectangle
              className="sm:hidden block text-[20px]"
              title="sign Out"
            />
          </button>
        )}
        {!session ? (
          <Image
            src="/blank_profile.svg"
            width={37}
            height={37}
            alt="user-profile"
            className="rounded-full"
          />
        ) : (
          <Link href="/profile">
            <Image
              src={session?.user?.image}
              width={37}
              height={37}
              alt="user-profile"
              className="rounded-full"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
