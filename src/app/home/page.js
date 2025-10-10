
"use client"

import Link from "next/link";
import Image from "next/image";
import JobComponent from "../../../components/JobComponent";
import CategoryPill from "../../../components/CategoryPill";
import CompanyPill from "../../../components/CompanyPill";
import {DivideProcess, ProcessStage} from "../../../components/ProcessStage";
import ContactOption from "../../../components/ContactOption";
import { useState, useEffect } from "react";
import { fetchJobs } from "../../../lib/fetchJobs";
import { getSubscribed } from "../../../lib/subscription";
import { useStore } from "../../../store/useStore";
import Carousel from "../../../components/Carousel";
import { supabase } from "../../../lib/supabaseClient";

export default function NewHome() {
    
    const [jobs, setJobs] = useState([]);
    const [subscribed, setSubscribed] = useState(false);
    const [emailUser, setEmailUser] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const { loggedIn, setLoggedIn } = useStore();
    const [contactForm, setContactForm] = useState({
        contactName: "",
        messageTitle: "",
        contactEmail: "",
        contactMessage: "",
    })
    const [sendContact, setSendContact] = useState(false);

    const emailMock = {
        contactName: "Joy",
        messageTitle: "Enquiry",
        contactEmail: "enquiry@mail",
        contactMessage: "This is a test"
    }

    useEffect(() => {
        if (!sendContact) return;
    
        const sendMessage = async () => {
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(contactForm),
            });
    
            const result = await res.json();
    
            if (result.success) {
              console.log("✅ Message sent successfully!");
            } else {
              console.error("❌ Failed to send:", result.error);
            }
          } catch (err) {
            console.error("❌ Error sending:", err.message);
          } finally {
            setSendContact(false); // reset trigger
          }
        };
    
        sendMessage();
      }, [sendContact]);

    useEffect(() => {
        async function loadJobs() {
          const { data, error } = await supabase
            .from("jobs")
            .select("*")
            .eq("Isfeatured", true);  // 👈 filter only featured
      
          if (error) {
            console.error("Error fetching featured jobs:", error.message);
          } else {
            setJobs(data);
          }
        }
      
        loadJobs();
    }, []);
      
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
    <div className="home-parent">
        <section id="hero" className="hero">
            <div className="hero-image">
                <Carousel />
            </div>
            <div className="hero-pane">
                <div className="hero-text">
                    <p>Find Your Next Career Fast</p>
                </div>
                <div className="hero-buttons">
                    { !loggedIn && <Link className="create-account" href="/home/accountpage">Create Account</Link>}
                    <Link className="browse" href="/home/jobspage">Browse Jobs</Link>
                </div>
            </div>
        </section>
        <section className="featured">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="featured-title"><p>Featured Jobs</p></div>
            <div className="featured-jobs">
                {jobs.map((job, index) => (
                    <JobComponent key={index} job={job} />
                ))}
            </div>
        </section>
        <section id="categories" className="categories">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="categories-title"><p>Categories</p></div>
            <div className="category-group">
               <CategoryPill variant="category" catvalue="Design" />
               <CategoryPill variant="category" catvalue="Science & Technology"  />
               <CategoryPill variant="category" catvalue="Manufacturing" />
               <CategoryPill variant="category" catvalue="Business" />
               <CategoryPill variant="category" catvalue="Agriculture"  />
               <CategoryPill variant="category" catvalue="Consulting" />
               <CategoryPill variant="category" catvalue="Programming"  />
               <CategoryPill variant="category" catvalue="Cleaning & Sanitation"  />
               <CategoryPill variant="category" catvalue="Many More"  />
            </div>
            {/* <div className="company-group">
            </div> */}
        </section>
        <section id="process" className="process">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="process-title"><p>How It Works</p></div>
            <div className="title-content">
                <ProcessStage 
                    ptitle="Browse Job"
                    pdescribed="Quickly scan curated openings that match your skills and preferences"
                    plink="/magnifying.svg"
                />
                <DivideProcess />
                <ProcessStage 
                    ptitle="Apply Job"
                    pdescribed="Submit a tailored application form containing details employers need"
                    plink="/document.svg"
                />
                <DivideProcess />
                <ProcessStage 
                    ptitle="Get Hired"
                    pdescribed="Patiently wait on next steps as employers consider your application thoroughly"
                    plink="/handshake.svg"
                />
            </div>
        </section>
        <section id="about" className="about">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="about-content">
                <div className="about-title">About</div>
                <Image src="/big_rcg.png" height={0} width={0} alt="company" sizes="100vw" className="about-image"/>
                <div className="describe">
                    <p className="company-description">
                        Realmer Consulting Agency is a trusted international recruitment and consulting firm
                        connecting job seekers with top employers worldwide. With offices in Accra and Kumasi
                        and a network of over 130 global partners, we provide professional recruitment,
                        business consulting, and travel services to help people and organizations thrive. <Link href="/home/aboutpage" className="about-link">Learn More</Link>
                    </p></div>
                <div className="company-profiles">
                    <div className="company-profile">
                        <Image src="/pic_1.png" height={0} width={0} alt="profile" sizes="100vw" className="company-profile-pic"/>
                        <div className="company-profile-name"> Rev. Cosmos Nimako <br/><span className="profile-post">C.E.O</span></div>
                    </div>
                    <div className="company-profile">
                        <Image src="/pic_2.png" height={0} width={0} alt="profile" sizes="100vw" className="company-profile-pic"/>
                        <div className="company-profile-name">Akua Boakyewaa <br/><span className="profile-post">Lawyer</span></div>
                    </div>
                    <div className="company-profile">
                        <Image src="/pic_3.png" height={0} width={0} alt="profile" sizes="100vw" className="company-profile-pic"/>
                        <div className="company-profile-name">Elvis Ofori <br/><span className="profile-post">HR Assistant</span></div>
                    </div>
                    <div className="company-profile">
                        <Image src="/pic_4.png" height={0} width={0} alt="profile" sizes="100vw" className="company-profile-pic"/>
                        <div className="company-profile-name">Kojo Boahen <br/><span className="profile-post">HR Assistant</span></div>
                    </div>
                    <div className="company-profile">
                        <Image src="/pic_5.png" height={0} width={0} alt="profile" sizes="100vw" className="company-profile-pic"/>
                        <div className="company-profile-name">Frank Osei Tutu <br/><span className="profile-post">Business Consultant</span></div>
                    </div>
                </div>
            </div>
            <div className="contact-content">
                <ContactOption 
                    contacticon="/location.svg"
                    contactfield="Adum-Kumasi, Ghana"
                />
                <ContactOption 
                    contacticon="/mail.svg"
                    contactfield="info@realmerconsultingagency.ceo"
                />
                <ContactOption 
                    contacticon="/phone.svg"
                    contactfield="+233506489961"
                />
                <ContactOption 
                    contacticon="/whatsapp.svg"
                    contactfield="+233242810008"
                />
            </div>
        </section>
        <section id="contact" className="contact">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="contact-card">
                <div className="contact-title">For Other Inquiries <br/>Send us a message</div>
                <div className="contact-container">
                    <div className="contact-fields">
                        <input
                            placeholder="Enter Name"
                            className="contact-name"
                            value={contactForm.contactName}
                            onChange={(e) => setContactForm({ ...contactForm, contactName: e.target.value})}
                        />
                        <input
                            placeholder="Enter Email Address"
                            className="contact-message-title"
                            value={contactForm.contactEmail}
                            onChange={(e) => setContactForm({ ...contactForm, contactEmail: e.target.value})}                            
                        />                          
                        <input
                            placeholder="Enter Message Title"
                            className="contact-message-title"
                            value={contactForm.messageTitle}
                            onChange={(e) => setContactForm({ ...contactForm, messageTitle: e.target.value})}                            
                        />                  
                        <textarea 
                            placeholder="Enter Message" className="contact-message"
                            value={contactForm.contactMessage}
                            onChange={(e) => setContactForm({ ...contactForm, contactMessage: e.target.value})}                            
                            ></textarea>
                        <p onClick={() => setSendContact(true)} className="send-message">Send</p>                        
                    </div>
                </div>
            </div>
        </section>
        <section id="subscription" className="subscription">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="subscription-data">
                <p className="subscription-title">Subscription</p>
            </div>
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

