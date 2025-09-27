
"use client"

import Link from "next/link"
import "./confirm.css"
import Image from "next/image";
import { useState, useEffect } from "react";
import { getSubscribed } from "../../../../../../../../lib/subscription";

export default function ConfirmPage() {

  const [subscribed, setSubscribed] = useState(false);
  const [emailUser, setEmailUser] = useState("");
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    if (!emailUser) return

    async function subscribe() {
      const result = await getSubscribed(emailUser)
      if (result) {
        setSubscribed(true) // flip state if subscription was successful
      }
    }

    subscribe()
}, [emailUser]) // runs whenever emailUser changes


const handleEmailList = () => {
    setEmailUser(emailInput);
    setEmailInput("");
}

  return (
    <div>
        <section className="confirm-status">
          <p className="confirmed-title">Application<br/> Confirmed</p>
          <Image sizes="100vw" src="/confirmed-vector.svg" height={0} width={0} alt="vector" className="confirm-icon" />
          <p className="appreciation-text">
            Thank you for applying through
            Realmer Consulting Agency
            We wish you the best going
            forward
          </p>
        </section>
        <section className="confirm-subscription">
          <div className="subscription-content">
                <p className="subscription-description">Stay Updated</p>
                <input 
                    type="email"
                    placeholder="Enter email"
                    className="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                />
                <div onClick={handleEmailList} className="subscribe"><p>Subscribe</p></div>
                { subscribed && <p className="subscribe-thanks">Thank You for Subscribing<br/><span onClick={() => setSubscribed(false)} className="subscribe-thanks-note">Click to dismiss</span></p>}
          </div>         
        </section>
    </div>
  );
}