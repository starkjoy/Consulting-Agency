
"use client"

import Link from "next/link";
import "./jobcreate.css"
import { useEffect, useState } from "react"
import { fetchJobs } from "../../../../../lib/fetchJobs";

export default function JobCreatePage() {

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
        <section className="job-notification">
            <p>Notifications Here</p>
        </section>
        <section className="job-edits">
            <div className="job-create-title">
                <p>Created Jobs</p>
                <Link className="add-job" href="/home/adminpage/jobcreate/addjobpage">Add Job</Link>
            </div>
            { jobs.map((job) => (<div key={job.id} className="featured-job">
                <div className="job-thumbnail"></div>
                <div className="job-data-edit">
                    <div className="job-details">
                        <div className="company-icon"></div>
                        <div className="job-info">
                                <p className="job-title">{job.title}</p>
                                <p className="job-description">{job.description}</p>
                        </div>
                    </div>
                    <div className="apply"><p>Status</p></div>
                </div>
                <div className="job-control">
                    <Link className="edit-job" href={`/home/adminpage/jobcreate/${job.id}/editjobpage`}>Edit</Link>
                    <p>Delete</p>
                </div>
            </div>))}            
        </section>
    </div>
  );
}

