
"use client"

import Link from "next/link";

export default function NewHome() {
  return (
    <div>
        <section className="hero">
            <div className="hero-image"></div>
            <div className="hero-text">
                <p>Find your next career</p>
            </div>
            <div className="hero-buttons">
                <Link className="link" href="/home/jobspage">Browse Jobs</Link>
                <Link className="link" href="/subscribe">Subscribe</Link>
            </div>
        </section>
        <section className="featured">
            <div className="featured-title"><p>Featured Jobs</p></div>
            <div className="featured-jobs">
                <div className="featured-job">
                    <div className="job-thumbnail"></div>
                    <div className="job-data">
                        <div className="job-details">
                            <div className="company-icon"></div>
                            <div className="job-info">
                                <p className="job-title">Job title</p>
                                <p className="job-description">Description</p>
                            </div>
                        </div>
                        <div className="apply"><p>Apply</p></div>
                    </div>
                    <div className="see-more"><p>See More</p></div>
                </div>
            </div>
        </section>
        <section className="categories">
            <div className="categories-title"><p>Categories</p></div>
            <div className="category">
                <p>Category1</p>
            </div>
            <div className="company">
                <p>Company1</p>
            </div>
        </section>
        <section className="process">
            <div className="process-title"><p>How It Works</p></div>
            <div className="title-content">
                <div className="step1">
                    <div className="step-icon"></div>
                    <p className="step-title">Title</p>
                    <p className="step-description">Description</p>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="about-content">
                <div className="about-title">About</div>
                <div className="about-image"></div>
                <div className="describe"><p>Description Text</p></div>
            </div>
            <div className="contact-content">
                <div className="contact1">
                    <div className="contact-icon"></div>
                    <p className="contact-text">Contact 1</p>
                </div>
            </div>
        </section>
        <section className="subscription">
            <div className="subscription-data">
                <p className="subscription-title">Subscription</p>
                <p className="subscription-description">Stay Updated</p>
            </div>
            <div className="subscription-content">
                <div className="email"><p>Email</p></div>
                <div className="subscribe"><p>Subscribe</p></div>
            </div>
        </section>
    </div>
  );
}

