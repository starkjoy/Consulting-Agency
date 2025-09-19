

import Link from "next/link"
import "./confirm.css"
import { supabase } from "../../../../../../../../lib/supabaseClient";

export default async function ConfirmPage({params}) {
  const { id } = await params

  const { data: job, error } = await supabase
  .from("jobs")
  .select("*")
  .eq("id", id)  // filter by job id
  .single() 
  
  return (
    <div>
        <section className="confirm-status">
          <p>Application Confirmed</p>
          <div className="confirm-icon"></div>
          <p>Thank you for applying to {job.title} some other texts...</p>
        </section>
        <section className="confirm-subscription">
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