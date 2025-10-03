
"use client"

import Image from "next/image";
import Link from "next/link";
import './landing.css'
import { useState, useEffect } from 'react';
import { useStore } from "../../../store/useStore";
import { supabase } from "../../../lib/supabaseClient";

export default function HomeLayout({children}) {

  const [openMenu, setOpenMenu] = useState(false);
  const { loggedIn, setLoggedIn } = useStore();
  const { userId, setUserId } = useStore();
  const [loggedName, setLoggedName] = useState("");
  const [profileColor, setProfileColor] = useState("")

  const randomProfileColor = ["#4EFAE6", "#C9FF87", "#E1FF37", "#F587FF", "#FF8789"];

  useEffect(() => {
    async function loadSession() {
      // On first load, check if Supabase already has a session
      const { data: { session } } = await supabase.auth.getSession()
  
      if (session?.user) {
        setLoggedIn(true)
        setLoggedName(session.user.email)
        setUserId(session.user.id); 
      } else {
        // no session yet → stay logged out
        setLoggedIn(false)
        setLoggedName("")
        setUserId(null); 
      }
    }
  
    loadSession()
  
    const { data: subscription } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          // user just clicked magic link → flip to logged in
          setLoggedIn(true)
          setLoggedName(session.user.email)
          setUserId(session.user.id); 
        }
        if (event === "SIGNED_OUT") {
          setLoggedIn(false)
          setLoggedName("")
          setUserId(null); 
        }
      }
    )
  
    return () => subscription.subscription.unsubscribe()
  }, [setLoggedIn])
  
  useEffect(() => {
    // Pick one random color when the component mounts
    const randomIndex = Math.floor(Math.random() * randomProfileColor.length)
    setProfileColor(randomProfileColor[randomIndex])
  }, [])
  
  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev);
  }

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Error signing out:", error.message)
    } else {
      setLoggedIn(false)
      setLoggedName("")
    }
  }
  



  return (
    <div className="container">
      <header className="header">
        <div className="top-header">
          <Link href="/home"><Image src="/com_logo.svg" height={0} width={0} alt="logo" className="circle"/></Link>
          <div className="header-profile">
            { loggedIn && <p style={{backgroundColor: profileColor }} className="profile-name">{loggedName[0]}</p>}
            <Image onClick={handleOpenMenu} src="/menu_icon.svg" height={0} width={0} alt="menu" className="menu-icon"/>
          </div>
        </div>
      </header>
      { openMenu && <div className="menu">
            <div className="menu-wrapper">
              <Image onClick={handleOpenMenu} src="/close_icon.svg" height={0} width={0} alt="close" className="close_menu"/>
              { !loggedIn && <Link onClick={handleOpenMenu} href="/home/signpage" className="menu-link">Sign In</Link>}
              { loggedIn && <p onClick={() => { handleSignOut(); handleOpenMenu(); }} className="menu-link">Sign Out</p>}
              <Link onClick={handleOpenMenu} href="/home/jobspage" className="menu-link">Browse Jobs</Link>
              <Link onClick={handleOpenMenu} href="/#categories" className="menu-link">Categories</Link>
              <Link onClick={handleOpenMenu} href="/#process" className="menu-link">How It Works</Link>
              <Link onClick={handleOpenMenu} href="/#about" className="menu-link">About</Link>
              <Link onClick={handleOpenMenu} href="/#contact" className="menu-link">Contact</Link>
              <Link onClick={handleOpenMenu} href="/#subscription" className="menu-link">Subscription</Link>
              <Image src="/rcg.svg" height={0} width={0} alt="logo" className="rcg_logo"/>
              {/* <Link className="menu-link" href="/home/categorypage">Category</Link>
              <Link className="menu-link" href="/home/adminpage">Admin</Link> */}
            </div>
          </div>}
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <Link href="#"><Image src="/move_up.svg" height={0} width={0} alt="icon" className="top_nav"/></Link>
        <div className="links">
          <Link href="/#about" className="footer-link">About</Link>
          <Link href="/#contact" className="footer-link">Contact</Link>
          <Link href="/#categories" className="footer-link">Categories</Link>
          <Link href="/home/jobspage" className="footer-link">Browse Jobs</Link>
          <Link href="/#process" className="footer-link">How It Works</Link>
          <Link href="/#subscription" className="footer-link">Subscription</Link>
        </div>
        <Image src="/rcg.svg" height={0} width={0} alt="logo" className="footer_rcg"/>
        <p className="footer-link copyright">Copyright 2025</p>
      </footer>
    </div>
  );
}
