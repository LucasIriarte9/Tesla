"use client";
import { titleFont } from "@/config/fonts";
import { useUiStore } from "@/store";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full md:px-12 py-2">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Tesla
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
          href="/category/men"
        >
          Hombre
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
          href="/category/women"
        >
          Mujer
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
          href="/category/kid"
        >
          Niños
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button
          onClick={openSideMenu}
          className="p-2 rounded-md transition-all hover:bg-gray-100 "
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default TopMenu;
