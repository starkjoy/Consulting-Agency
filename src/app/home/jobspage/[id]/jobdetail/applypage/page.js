
"use client"

import Link from "next/link"
import "./apply.css"
import { useState, useEffect, use } from "react"
import { supabase } from "../../../../../../../lib/supabaseClient"
import {ApplicationForm, FormWrapperA, FormWrapperC, FormWrapperD, FormWrapperE, FormWrapperF, FormWrapperG } from "../../../../../../../components/ApplicationForm"
import { useStore } from "../../../../../../../store/useStore"
import { insertSubmission } from "../../../../../../../lib/insertData"
import { fetchForm } from "../../../../../../../lib/fetchForm"

export default function ApplyPage({params}) {

  const { userId, setUserId } = useStore();
  const [input, setInput] = useState("");
  const [job, setJob] = useState(null);
  const { id } = use(params)
  const { loggedIn, setLoggedIn } = useStore();
  const [dataConsent, setDataConsent] = useState(false);
  const [formData, setFormData] = useState({
    userID: userId || null,
  });
  const [shouldSend, setShouldSend] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [emptyFields, setEmptyFields] = useState(true);
  const [saveFormData, setSaveFormData] = useState(false);

  const formTest = {
    userID: userId,
    date: "2025-09-19",
    surname: "Doe",
    firstName: "John",
    middleName: "Michael",
    birthDate: "1995-06-15",
    age: 30,
    maritalStatus: "Single",
    gender: "Male",
    region: "Greater Accra",
    cityTown: "Accra",
    nationality: "Ghanaian",
    country: "Ghana",
    idType: "Passport",
    idNumber: "GHA123456789",
    residentialAddress: "123 Ring Road, Accra",
    personalAccount: "john.doe@example.com",
  
    nameOfInstitution: "University of Ghana",
    qualification: "BSc Computer Science",
  
    nameOfOrganization: "TechCorp Ltd.",
    positionHeld: "Frontend Developer",
  
    physicallyChallenged: "Yes",
    specifyChallenge: "Its just that....",
  
    jobPreference: "Software Engineer",
    jobPlace: "Remotes",
  
    computerLiterate: "Yes",
    guarantorContact: "+233 55 123 4567",
    guarantorLocation: "Kumasi",
    findingRealmer: "Through LinkedIn Ads",

    fullSizeA: formData.fullSizeA,
    fullSizeB: formData.fullSizeB,
    fullVideo: formData.fullVideo,
    imageCardID: formData.imageCardID,
    documentCV: formData.documentCV

  }
  
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

  useEffect(() => {
    if (!shouldSend) return

    const sendForm = async () => {

      const data = new FormData();
      data.append("fullSizeA", formData.fullSizeA);
      data.append("fullSizeB", formData.fullSizeB);
      data.append("fullVideo", formData.fullVideo);
      data.append("imageCardID", formData.imageCardID);
      data.append("documentCV", formData.documentCV);
      data.append("metadata", JSON.stringify(formData));

      try {
        const res = await fetch("/api/send-form", {
          method: "POST",
          body: data,
        });

        const result = await res.json()
        if (result.success) {
          console.log("✅ Email sent!")
          console.log("Preview link:",result.previewUrl)

          // 👉 open Ethereal preview in new tab
          if (result.previewUrl) {
            window.open(result.previewUrl, "_blank")
          }
        } else {
          console.error("❌ Failed:", result.error)
        }
      } catch (err) {
        console.error("❌ Error sending:", err.message)
      } finally {
        setShouldSend(false) // reset trigger
      }
    }

    sendForm()
  }, [shouldSend])

  useEffect(() => {
    async function submitData() {
      const result = await insertSubmission(formData)
  
      if (result) {
        console.log("✅ success", result)
      } else {
        console.log("❌ failed")
      }
  
      // reset the flag *after* submitting
      setSaveFormData(false)
    }
  
    if (saveFormData) {
      submitData()
    }
  }, [saveFormData]) // 👈 only watch the flag
  
  useEffect(() => {
    async function loadForm() {
      if (userId) {
        const { data, error } = await fetchForm(userId);
        if (error) {
          console.error("Error fetching form:", error.message);
        } else {
          // Exclude user_id completely
          const { userID, ...rest } = data || {};
  
          // Set "" for all text fields
          const prefillData = Object.fromEntries(
            Object.entries(rest).map(([key, value]) => [key, value ?? ""])
          );
  
          // Ensure userId is null for table entry
          setFormData({ userID: null, ...prefillData });
        }
      }
    }
    loadForm();
  }, [userId]);
  
  useEffect(() => {
    const skipKeys = ["userID", "specifyChallenge"];
  
    const allFilled =
      Object.keys(formData).length > 0 &&
      Object.keys(formTest)
        .filter((key) => !skipKeys.includes(key))
        .every((key) => {
          const val = formData[key];
          return val !== null && val !== undefined && val.toString().trim() !== "";
        });
  
    if (allFilled) {
      setFormFilled(true);
      console.log("Form is fully filled ✅");
      // maybe trigger auto-save or set state
    }
  }, [formData]);

  const handleSubmit = () => {
    setShouldSend(true);
  };
  


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
            drophead="Select to Choose"
            formData={formData}
            setFormData={setFormData}
          />
           <ApplicationForm 
            fieldname="Highest Level of Education"
            fieldlabel1="Name of Institution"
            fieldlabel2="Qualification"
            formData={formData}
            setFormData={setFormData}
          />
          <ApplicationForm 
            fieldname="Last Work Experience"
            fieldlabel1="Name of Organization"
            fieldlabel2="Position Held"
            formtype={FormWrapperF}
            formData={formData}
            setFormData={setFormData}
          />
          <ApplicationForm 
            fieldname="Medical Experience"
            fieldlabel1="Are You Physically Challenged"
            fieldlabel2="If Yes, Please specify"
            formtype={FormWrapperE}
            drop1="No"
            drop2="Yes"
            drophead="Select to Choose"
            formData={formData}
            setFormData={setFormData}
          />
          <ApplicationForm 
            fieldname="Job Placement"
            fieldlabel1="Job Preference"
            fieldlabel2="Job Place"
            formtype={FormWrapperG}
            formData={formData}
            setFormData={setFormData}
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
            drophead="Select to Choose"
            formData={formData}
            setFormData={setFormData}
          />
          <ApplicationForm 
            formtype={FormWrapperD}
            fieldname="Upload Section"
            fieldlabel1={<>Upload two full-size pictures{" "}<span className="upload-caution">(Max 2mb each)</span></>}
            fieldlabel2={<>Upload one full video{" "}<span className="upload-caution">(Max 5mb)</span></>}
            fieldlabel3={<>Upload picture of id card{" "}<span className="upload-caution">(Max 2mb)</span></>}
            fieldlabel4={<>Upload CV {" "}<span className="upload-caution">(Max 2mb)</span></>}
            formData={formData}
            setFormData={setFormData}
          />
        </section>
        <section className="apply-section">
          { emptyFields && !dataConsent && <p className="form-empty">Please fill all fields and accept data consent</p>}
          {/* Submits to email: as provided */}
          <div className="apply-acknowledge">
            <p className="finish-text">
              I agree to allow  Realmer Consulting Agency to process/store my data.
            </p>
            <input 
              type="checkbox" 
              name="agree" 
              className="apply-check"
              onChange={(e) => setDataConsent(e.target.checked)}
            />
          </div>
          { loggedIn && <div className="save-data">
            <p className="finish-text">
              Save Application Data For Next Time
            </p>
            <input 
              type="checkbox" 
              name="agree" 
              className="apply-check"
              onChange={(e) => setSaveFormData(e.target.checked)}
            />
          </div>}
          <div className="save-notice"></div>
          {/* <Link onClick={handleSubmit} className="apply-submit" href={`/home/jobspage/${job && job.id}/jobdetail/applypage/confirmpage`}>Submit Application</Link> */}
          { dataConsent && formFilled ? <Link onClick={handleSubmit} className="apply-submit" href={`/home/jobspage/1/jobdetail/applypage/confirmpage`}>Submit Application</Link> : <p className="no-submit">Submit Application</p>}
        </section>
    </div>
  );
}