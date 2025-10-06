
"use client"

import Link from "next/link"
import "./jobpage.css"
import { useEffect, useState } from "react"
import CategoryPill from "../../../../components/CategoryPill"
import { fetchJobs } from "../../../../lib/fetchJobs"
import Image from "next/image"
import JobComponent from "../../../../components/JobComponent"
import { fetchCategories } from "../../../../lib/fetchCategories"
import { fetchCompanies } from "../../../../lib/fetchCompany"

export default function JobPage() {

    const [jobs, setJobs] = useState([]);
    const [findJob, setFindJob] = useState(false);
    const [openSearch, setOpenSearch] = useState(true);
    const [query, setQuery] = useState("");
    const [queryResult, setQueryResult] = useState([]);
    const [catSelectID, setCatSelectID] = useState([]);
    const [comSelectID, setComSelectID] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [companyList, setCompanyList] = useState([]);
    const [filterTag, setFilterTag] = useState(false);
    const [filterCategory, setFilterCategory] = useState(true);
    const [filterCompany, setFilterCompany] = useState(false);

    useEffect(() => {
      async function loadJobs() {
        const data = await fetchJobs();
        setJobs(data);
        setQueryResult(data); // show all initially
      }
      loadJobs();
    }, []);

    useEffect(() => {
      if (catSelectID.length === 0) {
        setQueryResult(jobs);
      } else {
        const filtered = jobs.filter(job => catSelectID.includes(job.category_id));
        setQueryResult(filtered);
        console.log(filtered);
      }
    }, [catSelectID, jobs]);
  
    useEffect(() => {
      if (comSelectID.length === 0) {
        setQueryResult(jobs);
      } else {
        const filtered = jobs.filter(job => comSelectID.includes(job.company_id));
        setQueryResult(filtered);
      }
    }, [comSelectID, jobs]);


    useEffect(() => {
      async function loadCategories() {
        const data = await fetchCategories(); // fetch from Supabase
        setCategoryList(data);
      }
    
      loadCategories();
    }, []);

    useEffect(() => {
      async function loadCompanies() {
        const data = await fetchCompanies(); // fetch from Supabase
        setCompanyList(data);
      }
    
      loadCompanies();
    }, []);

    const handleResult = () => {
      setFindJob(true);
      setOpenSearch(false);
      const results = jobs.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase())
      );
      setQueryResult(results);
    };
    

    const handleCloseResult = () => {
      setFindJob(false);
      setQuery("");
      setOpenSearch(true);
    }

    const handleQueryChange = (e) => {
      setOpenSearch(true);
      const value = e.target.value;
      setQuery(value);
    
      if (value.trim() === "") {
        setQueryResult(jobs); // reset to all jobs
      } else {
        const results = jobs.filter(job =>
          job.title.toLowerCase().includes(value.toLowerCase())
        );
        setQueryResult(results);
      }
    };

    const handleCatSelect = (id) => {
      setCatSelectID((prev) => {
        if (prev.includes(id)) {
          // remove if already selected
          return prev.filter((item) => item !== id);
        } else {
          // add if not selected
          return [...prev, id];
        }
      });
    };

    const handleComSelect = (id) => {
      setComSelectID((prev) => {
        if (prev.includes(id)) {
          // remove if already selected
          return prev.filter((item) => item !== id);
        } else {
          // add if not selected
          return [...prev, id];
        }
      });
    };
      
    const handleFilterCategory = () => {
        setFilterCompany(false);
        setFilterCategory(true);
    }
      
    const handleFilterCompany = () => {
        setFilterCategory(false);
        setFilterCompany(true);
    }


  return (
    <div>
      <section className="job-top">
        <div className="search-job">
          <input 
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search Jobs"
          />
          <div className="search-con">
            { openSearch && <Image onClick={handleResult} src="/search.svg" height={0} width={0} alt="search" sizes="100vw" className="search-icon"/>}
            { !openSearch && <Image onClick={handleCloseResult} src="/search_close.svg" height={0} width={0} alt="search" sizes="100vw" className="search-close"/>}
          </div>
        </div>
        <div className="result-filter">
          { !findJob && 
            <div className="filter-parent">
              <div onClick={() => setFilterTag(prev => !prev)} className="filter-button">
                <p>Filter tags</p>
                <Image src="/filter_arrow.svg" className={ filterTag ? "filter-arrow" : "filter-arrow2" } sizes="100vw" height={0} width={0} alt="arrow" />
              </div>
              {filterTag && <div className="filter-pane">
                <div className="filter-head">
                  <p onClick={handleFilterCategory} className={` filter-head-category ${filterCategory ? "filter-selected" : ""}`}>Category</p>
                  <p onClick={handleFilterCompany} className={filterCompany ? "filter-selected" : ""}>Companies</p>
                </div>
                <div className="filter-content">
                  { filterCategory && <div className="filter-category">
                    {categoryList.map((cat) => (
                        <CategoryPill
                          key={cat.id}
                          id={cat.id}
                          mycat={catSelectID.includes(cat.id) ? "result-selected" : "result-pill"}
                          CatClick={handleCatSelect}
                          catvalue={cat.name}
                        />
                      ))}
                  </div>}
                  { filterCompany && <div className="filter-company">
                    {companyList.map((cat) => (
                          <CategoryPill
                            key={cat.id}
                            id={cat.id}
                            mycat={comSelectID.includes(cat.id) ? "com-selected" : "com-pill"}
                            CatClick={handleComSelect}
                            catvalue={cat.name}
                          />
                        ))}
                  </div>}
                </div>
              </div>}
            </div>
          }
          { findJob && <div className="bottom-filter">
            <p className="results-title">Showing results for</p>
            <p className="results-query">"{query}"</p>
          </div>}
        </div>
      </section>
      { !findJob && <div className="job-content">
          <section className="job-list">
            <div className="divider">
              <div className="divide"></div>
            </div>
            <div className="featured-title"><p>Jobs</p></div>
            <div className="featured-jobs">
              {queryResult.map((job) => (
                <JobComponent key={job.id} job={job} />
              ))}
            </div>
          </section>
      </div>}
      { findJob && <div className="result-content">
        <div className="divider">
          <div className="divide"></div>
        </div>
          {queryResult.length > 0 ? (
            queryResult.map((job) => (
              <JobComponent key={job.id} job={job} />
            ))
            ) : (
              <p className="results-title nothing-found">No results found</p>
          )}
      </div>}
    </div>
  );
}