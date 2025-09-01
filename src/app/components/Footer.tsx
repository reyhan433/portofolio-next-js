"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Reyhan Mahardika Setiawan</p>
      <div style={{ marginTop: "10px", display: "flex", gap: "15px", justifyContent: "center" }}>
        <a href="https://github.com/reyhan433" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/reyhnmhrdk_?igsh=aXh4OTNubGRiNm1l&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
}
