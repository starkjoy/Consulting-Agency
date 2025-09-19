
"use client"

import Link from "next/link"
import "./category.css"

export default function CategoryPage() {
  return (
    <div>
        <section className="job-notification">
            <p>Notifications Here</p>
        </section>
        <section className="category-add">
          <div className="category-form">
            <p>Category</p>
            <div className="form1">
              <p>Form Entry 1</p>
              <div className="form-input"></div>
            </div> 
            <p className="add-job">Add Category</p>           
          </div>
          <div className="category-list">
            <p>Category1</p>
            <p className="delete">Delete</p>
          </div>
        </section>
        <section className="company-add">
          <div className="company-form">
            <p>Company</p>
              <div className="form1">
                <p>Form Entry 1</p>
                <div className="form-input"></div>
              </div> 
              <p className="add-job">Add Company</p>                 
          </div>
          <div className="ccompany-list">
            <div className="job-details">
              <div className="company-icon"></div>
                <div className="job-info">
                  <p className="job-title">Company title</p>
                  <p className="job-description">Description</p>
                </div>
            </div>
            <p className="delete">Delete</p>
          </div>
        </section>
    </div>
  );
}