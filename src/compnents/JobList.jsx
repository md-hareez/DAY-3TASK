import { useEffect, useState } from "react";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const sampleJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "ABC Technologies",
        location: "Chennai",
      },
      {
        id: 2,
        title: "React Developer",
        company: "Google",
        location: "Bangalore",
      },
      {
        id: 3,
        title: "Software Engineer",
        company: "Microsoft",
        location: "Hyderabad",
      },
    ];

    setJobs(sampleJobs);

    console.log("Job data loaded!");
  }, []);

  return (
    <div>
      <h1>Job List</h1>

      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default JobList;
