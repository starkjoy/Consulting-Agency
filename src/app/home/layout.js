
"use client"

import Image from "next/image";
import Link from "next/link";
import './landing.css'
import { useState } from 'react';

export default function HomeLayout({children}) {

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev);
  }

  return (
    <div className="container">
      <header className="header">
        <div className="top-header">
          <Image src="/com_logo.svg" height={0} width={0} alt="logo" className="circle"/>
          <Image onClick={handleOpenMenu} src="/menu_icon.svg" height={0} width={0} alt="menu" className="menu-icon"/>
        </div>
      </header>
      { openMenu && <div className="menu">
            <div className="menu-wrapper">
              <Image onClick={handleOpenMenu} src="/close_icon.svg" height={0} width={0} alt="close" className="close_menu"/>
              <p className="menu-link">Browse Jobs</p>
              <p className="menu-link">Categories</p>
              <p className="menu-link">How It Works</p>
              <p className="menu-link">About</p>
              <p className="menu-link">Contact</p>
              <p className="menu-link">Subscription</p>
              <Image src="/rcg.svg" height={0} width={0} alt="logo" className="rcg_logo"/>
              {/* <Link className="menu-link" href="/home/categorypage">Category</Link>
              <Link className="menu-link" href="/home/adminpage">Admin</Link> */}
            </div>
          </div>}
      <main className="content">
        {children}
      </main>
      <footer className="footer">
      <Image src="/move_up.svg" height={0} width={0} alt="icon" className="top_nav"/>
        <div className="links">
          <p className="footer-link">About</p>
          <p className="footer-link">Contact</p>
          <p className="footer-link">Categories</p>
          <p className="footer-link">Browse Jobs</p>
          <p className="footer-link">How It Works</p>
          <p className="footer-link">Subscription</p>
        </div>
        <Image src="/rcg.svg" height={0} width={0} alt="logo" className="footer_rcg"/>
        <p className="footer-link copyright">Copyright 2025</p>
      </footer>
    </div>
  );
}
