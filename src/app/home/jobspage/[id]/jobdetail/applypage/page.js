
"use client"

import Link from "next/link"
import "./apply.css"
import { useState, useEffect, use } from "react"
import { insertTestSubmission } from "../../../../../../../lib/insertData"
import { supabase } from "../../../../../../../lib/supabaseClient"

export default function ApplyPage({params}) {

  const [input, setInput] = useState("");
  const [job, setJob] = useState(null);
  const { id } = use(params)


  useEffect(() => {
    const fetchJob = async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single()
      if (!error) setJob(data)
    }
    fetchJob()
  }, [id]);
  
  const handleSubmit = async () => {
    const result = await insertTestSubmission(input)
  }

  return (
    <div>
        <section className="apply-head">
          <p>Fill Application Form</p>
          <p>{job && job.description}</p>
        </section>
        <section className="apply-form">
          <div className="form1">
            <p>Form Entry 1</p>
            <div className="form-input">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type application text..."
              />
            </div>
          </div>
        </section>
        <section className="apply-button">
          {/* Submits to email: as provided */}
          <Link onClick={handleSubmit} className="apply-submit" href={`/home/jobspage/${job && job.id}/jobdetail/applypage/confirmpage`}>Submit Application</Link>
        </section>
    </div>
  );
}