"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <h1>Nahyer</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>

      </nav>
    </header>
  );
}
