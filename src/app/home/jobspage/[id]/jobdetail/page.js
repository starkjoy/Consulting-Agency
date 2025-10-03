
"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import "./jobdetail.css"
import { supabase } from "../../../../../../lib/supabaseClient";
import { useStore } from "../../../../../../store/useStore";

export default function JobDetail({params}) {

  const { id } = use(params);
  const [job, setJob] = useState([]);
  const { loggedIn, setLoggedIn } = useStore();

    
  useEffect(() => {
    async function fetchJob() {
      const { data, error } = await supabase
        .from("jobs")
        .select(`
          *,
          company:companies(*),
          category:categories(*)
        `)
        .eq("id", id)
        .single();
  
      if (error) {
        console.error("Error fetching job:", error.message);
        setError(error);
      } else {
        setJob(data);
      }
    }
  
    if (id) {
      fetchJob();
    }
  }, [id]);
  
  

    const formatDate = (createdAt) => {
        if (!createdAt) return "Unknown";
      
        // Parse directly (Postgres already gives an ISO string with timezone)
        const createdDate = new Date(createdAt);
      
        if (isNaN(createdDate.getTime())) {
          console.warn("Invalid date:", createdAt);
          return "Unknown";
        }
      
        const now = new Date();
        const diffTime = now - createdDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
        if (diffDays < 1) {
          // Less than a day
          const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
          if (diffHours < 1) {
            const diffMinutes = Math.floor(diffTime / (1000 * 60));
            return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
          }
          return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
        }
      
        return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    };

  return (
    <div>
        <section className="detail-cover" style={{backgroundImage: `url(${job?.jobCoverImg || '/rcg-default.png'})`}}>
          <div className="detail-cateogry-parent">
            <p className="detail-category">{job?.category?.name}</p>
          </div>
        </section>
        <section className="detail-content">
            <div className="detail-content-top">
                <div className="detail-company-info">
                    {/* <div className="detail-logo"></div> */}
                    <div className="detail-jobs">
                        <p className="detail-name">{job?.company?.name}</p>
                        <p className="detail-title">{job?.title}</p>
                        <div className="detail-post">
                            <p className="detail-posted">Posted: {formatDate(job?.created_at)}</p>
                        </div>
                    </div>
                </div>
                <div className="divider">
                    <div className="divide"></div>
                </div>
                <p className="detail-description">{job?.description}</p>
                <p className="detail-location-label">Located at:</p>
                <p className="detail-location">{job?.location}</p>
                <div className="divider">
                    <div className="divide"></div>
                </div>
                <p className="detail-pay">GHS {job?.salary}</p>
            </div>
            <div className="detail-buttons">
                <Link className="detail-apply" href={`/home/jobspage/${job?.id}/jobdetail/applypage`}>{!loggedIn ? `Apply as Guest` : `Apply`}</Link>
                { !loggedIn && <Link className="detail-create" href={`/home/jobspage/${job?.id}/jobdetail/accountpage`}>Create Account</Link>}
            </div>
        </section>
        <section className="detail-notice">
            <div className="divider">
              <div className="divide"></div>
            </div>
           { !loggedIn && <p className="detail-notice-text">
                With just <span className="notice-highlight">one account</span>, you can store your
                details, apply anywhere, and pick up right
                where you left off. <span className="notice-highlight">No repeats, no stress.</span>
            </p>}
        </section>
    </div>
  );
}