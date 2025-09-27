
"use client"

import Link from "next/link"
import "./apply.css"
import { useState, useEffect, use } from "react"
import { insertTestSubmission } from "../../../../../../../lib/insertData"
import { supabase } from "../../../../../../../lib/supabaseClient"
import {ApplicationForm, FormWrapperA, FormWrapperC, FormWrapperD, FormWrapperE} from "../../../../../../../components/ApplicationForm"
import { useStore } from "../../../../../../../store/useStore"

export default function ApplyPage({params}) {

  const [input, setInput] = useState("");
  const [job, setJob] = useState(null);
  const { id } = use(params)
  const { loggedIn, setLoggedIn } = useStore();


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
          <p className="form-title">Please Fill Out The <br/>Form Below</p>
          <div className="form-note">
            <p className="apply-description">
              Applicants should submit clear evidence of identification,
              such as a National Identity Card or Voter's Identity Card,
              along with two (2) full-pictures and one video.
            </p>
            <p className="apply-description">
              On average, this form takes around <span className="form-highlight">30 minutes.</span>
              &nbsp;Take your time — your progress matters more than speed.
            </p>
          </div>
          <div className="head-divide"></div>
        </section>
        <section className="apply-form">
          <ApplicationForm 
            fieldname="Personal Details"
            datetype="date"
            texttype="text"
            numbertype="number"
            drop1="Single"
            drop2="Married"
            drop3="Divorced"
            drop4="Male"
            drop5="Female"
            drop6="Ghana Card"
            drop7="Voter's ID"
            selecttype="select"
            fieldlabel1="date"
            fieldlabel2="surname"
            fieldlabel3="firstname"
            fieldlabel4="middlename"
            fieldlabel5="date of birth"
            fieldlabel6="age"
            fieldlabel7="marital status"
            fieldlabel8="gender"
            fieldlabel10="region"
            fieldlabel11="city/town"
            fieldlabel12="nationality"
            fieldlabel13="country"
            fieldlabel14="id type"
            fieldlabel15="id number"
            fieldlabel16="residential address"
            fieldlabel17="personal account"
            fieldlabel18="email address"
            formtype={FormWrapperA}
          />
           <ApplicationForm 
            fieldname="Highest Level of Education"
            fieldlabel1="Name of Institution"
            fieldlabel2="Qualification"
          />
          <ApplicationForm 
            fieldname="Last Work Experience"
            fieldlabel1="Name of Organization"
            fieldlabel2="Position Held"
          />
          <ApplicationForm 
            fieldname="Medical Experience"
            fieldlabel1="Are You Physically Challenged"
            fieldlabel2="If Yes, Please specify"
            formtype={FormWrapperE}
            drop1="No"
            drop2="Yes"
          />
          <ApplicationForm 
            fieldname="Job Placement"
            fieldlabel1="Job Preference"
            fieldlabel2="Job Place"
          />
          <ApplicationForm 
            formtype={FormWrapperC}
            fieldname="Others"
            fieldlabel1="Are you a computer literate"
            fieldlabel2="Guarantor's Contact"
            fieldlabel3="Guarantor's Location"
            fieldlabel4="How did you hear of realmer consulting agency?"
            drop1="No"
            drop2="Yes"
            numbertype="number"
          />
          <ApplicationForm 
            formtype={FormWrapperD}
            fieldname="Upload Section"
            fieldlabel1={<>Upload two full-size pictures{" "}<span className="upload-caution">(Max 2mb each)</span></>}
            fieldlabel2={<>Upload one full video{" "}<span className="upload-caution">(Max 5mb)</span></>}
            fieldlabel3={<>Upload picture of id card{" "}<span className="upload-caution">(Max 2mb)</span></>}
          />
        </section>
        <section className="apply-section">
          {/* Submits to email: as provided */}
          <div className="apply-acknowledge">
            <p className="finish-text">
              I agree to allow  Realmer Consulting Agency to process/store my data.
            </p>
            <input 
              type="checkbox" 
              name="agree" 
              value="yes" 
              className="apply-check"
            />
          </div>
          { loggedIn && <div className="save-data">
            <p className="finish-text">
              Save Application Data For Next Time
            </p>
            <input 
              type="checkbox" 
              name="agree" 
              value="yes" 
              className="apply-check"
            />
          </div>}
          <div className="save-notice"></div>
          {/* <Link onClick={handleSubmit} className="apply-submit" href={`/home/jobspage/${job && job.id}/jobdetail/applypage/confirmpage`}>Submit Application</Link> */}
          <Link className="apply-submit" href={`/home/jobspage/1/jobdetail/applypage/confirmpage`}>Submit Application</Link>
        </section>
    </div>
  );
}