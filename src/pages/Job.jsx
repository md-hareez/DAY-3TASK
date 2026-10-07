function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Technologies",
      location: "Chennai",
      status: "Applied",
    },
    {
      id: 2,
      title: "React Developer",
      company: "Google",
      location: "Bangalore",
      status: "Interview",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Microsoft",
      location: "Hyderabad",
      status: "Selected",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Job List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              {job.title}
            </h3>

            <p className="text-gray-700">
              <strong>Company:</strong> {job.company}
            </p>

            <p className="text-gray-700">
              <strong>Location:</strong> {job.location}
            </p>

            <p className="mt-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {job.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
