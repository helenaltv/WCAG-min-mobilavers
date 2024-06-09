"use client";
import Link from "next/link";
import { useState } from "next";

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <img src="/VIT bars-solid (2).png" alt="hamburger" />
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link className="hover:text-gray-500" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-gray-500" href="/nav">
            Nav
          </Link>
        </li>
      </ul>
    </>
  );
}
