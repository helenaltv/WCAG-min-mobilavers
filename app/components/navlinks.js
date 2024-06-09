"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <img
          className="hamburgerimg"
          src="/VIT bars-solid (2).png"
          alt="hamburger"
        />
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="/nav">
            NAV
          </Link>
        </li>
      </ul>
    </>
  );
}
