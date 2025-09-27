
"use client"

import Link from "next/link"
import "./account.css"
import { useEffect, useState } from "react";
import { createAccount } from "../../../../lib/createAccount";

export default function AccountPage() {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [submitData, setSubmitData] = useState(null);
  const [logNotice, setLogNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  useEffect(() => {

    if (!submitData) return;

    const { email, name } = submitData;

    const runCreateAccount = async () => {
      const { data, error } = await createAccount(email, name);
      if (error) setErrorNotice(true);
      else
        setLogNotice(true);
      setSubmitData(null);
    };

    runCreateAccount();
  }, [submitData]);

  const handleAccount = () => {
    if (!userEmail) return;
    setSubmitData({ email: userEmail, name: userName });
    setErrorNotice(false);
    setLogNotice(false);
    setUserEmail("");
    setUserName("");
  };

  const handleLog = () => {
    setErrorNotice(false);
    setLogNotice(false);
  }

  return (
    <div>
        <section className="account-form">
          <div className="account-entry">
            <div className="account-name">
              <p>Enter Name</p>
              <input 
                type="text"
                className="account-input" 
                value={userName}
                onChange={(e) => {setUserName(e.target.value); handleLog();}}
              />           
            </div>
            <div className="account-name">
              <p>Enter Email</p>
              <input 
                type="email"
                className="account-input" 
                value={userEmail}
                onChange={(e) => {setUserEmail(e.target.value); handleLog();}}
              />             
            </div>
          </div>
          <div className="account-create">
            <p onClick={handleAccount}>Create Account</p>
          </div>
        </section>
        <section className="account-notice">
          <div className="divider">
              <div className="divide"></div>
          </div>
          { logNotice && <p className="account-notice-text"> We’ve sent you a magic link to your email. Click to log in instantly.</p>}
          { errorNotice && <p className="account-notice-text" >Account Creation Failed, <br/> please try again</p>}
        </section>
    </div>
  );
}