import { useState } from "react";

function AddJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(job);

    alert("Job added successfully!");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Add New Job
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow"
      >
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Job Title
          </label>

          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Frontend Developer"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Company
          </label>

          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            placeholder="ABC Technologies"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleChange}
            placeholder="Chennai"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add Job
        </button>
      </form>
    </div>
  );
}

export default AddJob;
