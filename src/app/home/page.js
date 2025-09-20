
"use client"

import Link from "next/link";
import Image from "next/image";
import JobComponent from "../../../components/JobComponent";
import CategoryPill from "../../../components/CategoryPill";
import CompanyPill from "../../../components/CompanyPill";
import {DivideProcess, ProcessStage} from "../../../components/ProcessStage";
import ContactOption from "../../../components/ContactOption";

export default function NewHome() {
  return (
    <div>
        <section className="hero">
            <div className="hero-image"></div>
            <div className="hero-text">
                <p>Find Your Next Career Fast</p>
            </div>
            <div className="hero-buttons">
                <Link className="create-account" href="/home/jobspage">Create Account</Link>
                <Link className="browse" href="/subscribe">Browse Jobs</Link>
            </div>
        </section>
        <section className="featured">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="featured-title"><p>Featured Jobs</p></div>
            <div className="featured-jobs">
                <JobComponent/>
                <JobComponent/>
                <JobComponent/>
            </div>
        </section>
        <section className="categories">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="categories-title"><p>Categories</p></div>
            <div className="category-group">
               <CategoryPill />
               <CategoryPill />
               <CategoryPill />
               <CategoryPill />
               <CategoryPill />
               <CategoryPill />
               <CategoryPill />
            </div>
            <div className="company-group">
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
                    <CompanyPill />
            </div>
        </section>
        <section className="process">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="process-title"><p>How It Works</p></div>
            <div className="title-content">
                <ProcessStage />
                <DivideProcess />
                <ProcessStage />
                <DivideProcess />
                <ProcessStage />
            </div>
        </section>
        <section className="about">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="about-content">
                <div className="about-title">About</div>
                <Image src="/big_rcg.png" height={0} width={0} alt="company" sizes="100vw" className="about-image"/>
                <div className="describe"><p>Description Text</p></div>
            </div>
            <div className="contact-content">
                <ContactOption />
            </div>
        </section>
        <section className="subscription">
            <div className="divider">
                <div className="divide"></div>
            </div>
            <div className="subscription-data">
                <p className="subscription-title">Subscription</p>
            </div>
            <div className="subscription-content">
                <p className="subscription-description">Stay Updated</p>
                <div className="email"><p>Enter Email</p></div>
                <div className="subscribe"><p>Subscribe</p></div>
            </div>
        </section>
    </div>
  );
}

