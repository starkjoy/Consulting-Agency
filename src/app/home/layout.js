
"use client"

import Image from "next/image";
import Link from "next/link";
import './landing.css'

export default function HomeLayout({children}) {
  return (
    <div className="container">
      <header className="header">
        <div className="top-header">
          <div className="circle"></div>
          <div className="menu-icon"></div>
        </div>
        <div className="menu">
          <p>Menu1</p>
          <p>Menu1</p>
          <Link href="/home/categorypage">Category</Link>
          <Link href="/home/adminpage">Admin</Link>
        </div>
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <div className="links">
          <p>Footer Link</p>
          <p>Footer Link</p>
          <p>Footer Link</p>
        </div>
        <div className="social-buttons">
          <div className="social"></div>
          <div className="social"></div>
        </div>
        <div className="logo"></div>
      </footer>
    </div>
  );
}
