
"use client"

import Link from "next/link";
import "./addjob.css"

export default function AddJobPage() {
  return (
    <div>
        <section className="apply-head">
          <p>Create Job Form</p>
          <p>Some Descriptions</p>
        </section>
        <section className="apply-form">
          <div className="form1">
            <p>Form Entry 1</p>
            <div className="form-input"></div>
          </div>
        </section>
        <section className="apply-button">
          <p className="apply-submit" href="/home/jobspage/jobdetail/applypage/confirmpage">Save Button</p>
        </section>
    </div>
  );
}

