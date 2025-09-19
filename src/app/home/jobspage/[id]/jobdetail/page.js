

import Link from "next/link"
import "./jobdetail.css"
import { supabase } from "../../../../../../lib/supabaseClient";

export default async function JobDetail({params}) {

    const { id } = await params

    const { data: job, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)  // filter by job id
    .single()   

  return (
    <div>
        <section className="detail-cover">
            <div className="detail-image"></div>
        </section>
        <section className="detail-content">
            <div className="detail-content-top">
                <div className="detail-company-info">
                    <div className="detail-logo"></div>
                    <p className="detail-name">Company Name</p>
                </div>
                <p className="detail-description">{job.description}</p>
            </div>
            <div className="detail-buttons">
                <Link className="link" href={`/home/jobspage/${job.id}/jobdetail/applypage`}>Apply as Guest</Link>
                <Link className="link" href={`/home/jobspage/${job.id}/jobdetail/accountpage`}>Create Account</Link>
            </div>
        </section>
    </div>
  );
}