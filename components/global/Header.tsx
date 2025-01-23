"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/links";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import CartIcon from "../cart/CartIcon";

function Header() {
  // Menu Bar In Small Screens
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="">
      <div className="container">
     {/* Logo */}
<Link href="/">
  <span className="text-2xl font-bold text-gray-900 dark:text-black">
  SLONIXX
  </span>

</Link>

        {/* Nav Links (Iterate From => lib/links.ts) */}
        <ul
          className={`links ${
            showMenu ? "max-lg:!scale-100" : "max-lg:!scale-0"
          }`}
          onClick={() => setShowMenu(false)}
        >
          {links.map((link) => {
            return (
              <li key={link.id}>
              <Link href={link.path}>
                {link.name}
              </Link>
            </li>
            );
          })}
        </ul>

        {/* Nav Icons */}
        <ul className="nav-icons">
          <li>
            <IoSearch className="hover:opacity-50 hover:cursor-not-allowed" />
          </li>
          <li>
            <FaRegHeart className="hover:opacity-50 hover:cursor-not-allowed" />
          </li>
          <li>
            <CartIcon />
          </li>
          <li onClick={() => setShowMenu(!showMenu)} className="nav-menu">
            <FaBars />
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
