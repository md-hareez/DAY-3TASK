import { useState } from "react";

function JobForm() {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(company);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company name"
      />

      <button type="submit">
        Add Job
      </button>
    </form>
  );
}

export default JobForm;
