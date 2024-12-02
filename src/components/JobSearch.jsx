import React from "react";

const JobSearch = () => {

    const jobSearchHashTags = [
        "Fresher",
        "WorkFromHome",
        "WFH",
        "IT",
        "HR",
        "BackOffice",
        "BPOJobs",
        "ITES",
        "Finance",
        "Accounts",
        "Medical",
        "Pharma",
        "Manager",
        "Developer",
        "Marketing",
        "Engineering",
        "NonGovernmentJobs"
    ]

  return (
    <div className="job-search mt-12">
      <div className="text-center w-full">
        <h1 className="text-xl md:text-2xl font-bold text-darkBlue mb-2 leading-normal uppercase">
          Bringing you the Perfect Job !
        </h1>
        <p className="text-sm md:text-base font-medium text-darkBlue leading-normal ">
          11,000+ JOBS to Apply
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-strech justify-between gap-6 mt-8">
        <div className="bg-lightBlue p-5 basis-full md:basis-1/2 rounded-xl text-end">
          <div className="flex items-center gap-2 justify-end mb-3">
            <input

              type="text"
              placeholder="Search jobs now"
              className="input input-bordered w-full"
            />
            <button className="btn bg-yellow text-black font-sm font-medium border-yellow hover:bg-yellow hover:text-white hover:border-yellow transition-all">
            Search
          </button>
          </div>

          <button className="btn bg-white text-black font-sm font-medium border-white hover:bg-white hover:text-black hover:border-white transition-all me-3">
            View Jobs
          </button>

          <button className="btn bg-yellow text-black font-sm font-medium border-yellow hover:bg-yellow hover:text-white hover:border-yellow transition-all">
            Register for FREE
          </button>
        </div>

        <div className="bg-lightBlue p-5 basis-1/2 rounded-xl">
            <h3 className="text-xl font-medium text-darkBlue mb-2 text-center">Quick Job Search</h3>

            <div className="flex gap-2 flex-wrap">
            {
                jobSearchHashTags.map((item, index) => (
                    <span className="text-sm text-white" key={index}>#{item}</span>
                ))
            }
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
