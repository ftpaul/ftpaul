import React from "react"

export default ({ job }) => (
    <>
      <div className="exp-main-info">
        <img src={job.logo} alt={job.company} className="my-2 mr-2 w-10 h-10 xs:w-10 xs:h-10 align-top inline-block" />
        <p className="text-base pt-1 xs:pl-12 inline-block xs:block xs:absolute xs:-mt-16 xs:pt-4">
          <span className="font-bold">{job.role}</span> at {job.company}
          <span className="table-column xs:hidden"><br/></span>
          <span className="hidden xs:inline-block">&nbsp;‧&nbsp;</span>
          <span className="text-base text-gray-300 ">{job.start_date} - {job.end_date}</span>
        </p>
      </div>
    <ul className="list-disc pl-6 pb-4 exp-ul-bullets">
      {job.description.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
    </>
)
