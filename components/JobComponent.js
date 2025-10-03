
"use client"

import Link from "next/link";

export default function JobComponent({job}) {

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

    const shortenDescription = (text, wordLimit = 20) => {
        if (!text) return "";
        
        const words = text.split(/\s+/); // split by spaces
        if (words.length <= wordLimit) return text;
        
        return words.slice(0, wordLimit).join(" ") + "...";
    };
      
      
    return (
        <div>
            <div className="featured-job">
                <div className="job-thumbnail" style={{backgroundImage: `url(${job.jobCoverImg || '/rcg-default.png'})`}} ></div>
                <div className="job-data">
                    <div className="job-details">
                            <div className="job-head">
                                {/* <div className="company-icon"></div> */}
                                <p className="job-title">{job.title}</p>
                            </div>
                            <div className="job-info">
                                <p className="job-description">{shortenDescription(job.description, 20)}</p>
                                <p className="job-pay">GHS {job.salary}</p>
                            </div>
                    </div>
                    <div className="apply"><Link className="apply" href={`/home/jobspage/${job.id}/jobdetail`}><p>Apply</p></Link></div>
                    <div className="posted-stamp"><p>Posted: {formatDate(job.created_at)}</p></div>
                </div>
            </div>
        </div>
    );
}
