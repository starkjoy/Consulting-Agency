
"use client"

import Link from "next/link"
import "./account.css"

export default function AccountPage() {
  return (
    <div>
        <section className="account-form">
          <div className="account-name">
            <p>Enter Name</p>
            <div className="account-input"></div>            
          </div>
          <div className="account-name">
            <p>Enter Email</p>
            <div className="account-input"></div>            
          </div>
          <div className="account-create">
            <p>Create Account</p>
          </div>
        </section>
        <section className="account-notice">
          <p>Confirmation Notice</p>
          <p>Check email for magic link and click to login and some text..</p>
        </section>
    </div>
  );
}