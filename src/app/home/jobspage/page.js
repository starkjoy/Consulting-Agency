
"use client"

import Link from "next/link"
import "./jobpage.css"
import { useEffect, useState } from "react"
import { fetchJobs } from "../../../../lib/fetchJobs"

export default function JobPage() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function loadJobs() {
          const data = await fetchJobs()
          setJobs(data)
        }
        loadJobs()
      }, []);

  return (
    <div>
      <section className="job-top">
        <div className="search-job">Search Jobs</div>
        <div className="top-filter">
          <div className="categories-title"><p>Categories</p></div>
            <div className="category">
                <p>Category1</p>
            </div>
            <div className="company">
                <p>Company1</p>
            </div>
        </div>
      </section>
      <section className="job-featured">
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
                      <div className="apply"><Link href="/home/jobspage/jobdetail">Apply</Link></div>
                  </div>
                  <div className="see-more"><p>See More</p></div>
              </div>
          </div>
      </section>
      <section className="job-list">
        <div className="featured-title"><p>Jobs</p></div>
            <div className="featured-jobs">
                {jobs.map((job) => (<div key={job.id} className="featured-job">
                    <div className="job-thumbnail"></div>
                    <div className="job-data">
                        <div className="job-details">
                            <div className="company-icon"></div>
                            <div className="job-info">
                                <p className="job-title">{job.title}</p>
                                <p className="job-description">{job.description}</p>
                            </div>
                        </div>
                        <div className="apply"><Link href={`/home/jobspage/${job.id}/jobdetail`}>Apply</Link></div>
                    </div>
                    <div className="see-more"><p>See More</p></div>
                </div>))}
            </div>
      </section>
    </div>
  );
}