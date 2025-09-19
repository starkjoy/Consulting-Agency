
"use client"

import Link from "next/link";
import "./admin.css"

export default function AdminPage() {
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
            <Link className="account-login" href="/home/adminpage/jobcreate">Login</Link>
          </div>
        </section>
    </div>
  );
}

