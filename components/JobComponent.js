
"use client"

export default function JobComponent() {
    return (
        <div>
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
            </div>
        </div>
    );
}
