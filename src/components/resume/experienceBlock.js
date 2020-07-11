import React from "react"

export default ({ job }) => (
    <>
    <img src={job.logo} alt={job.company} className="my-1 mr-2 w-12 h-12 align-top inline-block " />
    <p className="text-base pt-1 inline-block"><span className="font-bold">{job.role}</span> at {job.company} <br/>
    <span className="text-base text-gray-300 ">{job.start_date} - {job.end_date}</span></p>
    <ul className="list-disc pl-6 pb-4">
      {job.description.map((point) => (
        <li>{point}</li>
      ))}
    </ul>
    </>
)
