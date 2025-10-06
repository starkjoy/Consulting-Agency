
"use client"

import Link from "next/link"
import "./sign.css"
import { useState, useEffect } from "react";
import { signAccount } from "../../../../lib/signAccount";

export default function AccountPage() {

  const [logNotice, setLogNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [submitData, setSubmitData] = useState(null);

  useEffect(() => {
    if (!submitData) return

    async function runSignIn() {
      const { error } = await signAccount(submitData.email)

      if (error) {
        console.error("Sign-in error:", error.message)
        setErrorNotice(true)
        setLogNotice(false)
      } else {
        setLogNotice(true) // "We’ve sent you a magic link..."
        setErrorNotice(false)
      }
    }

    runSignIn()
  }, [submitData])

  const handleSignIn = () => {
    if (!userEmail) return;
    setSubmitData({ email: userEmail, name: userName });
  }

  const handleLog = () => {
    setErrorNotice(false);
    setLogNotice(false);
  }

  return (
    <div>
        <section className="account-form">
          <div className="account-entry">
            {/* <div className="account-name">
              <p>Enter Name</p>
              <input 
                type="text"
                value={userName}
                onChange={(e) => {setUserName(e.target.value); handleLog();}}
                className="account-input"
              />           
            </div> */}
            <div className="account-name">
              <p>Enter Email</p>
              <input 
                type="email"
                value={userEmail}
                onChange={(e) => {setUserEmail(e.target.value); handleLog();}}
                className="account-input" 
              />             
            </div>
          </div>
          <div className="account-create">
            <p onClick={handleSignIn}>Sign In</p>
          </div>
        </section>
        <section className="account-notice">
          <div className="divider">
              <div className="divide"></div>
          </div>
          { logNotice && <p className="account-notice-text"> We’ve sent you a magic link to your email. Click to log in instantly.</p>}
          { errorNotice && <p className="account-notice-text"> Failed to login <br/>Please try again after some time</p>}
        </section>
    </div>
  );
}