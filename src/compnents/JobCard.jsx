function JobCard({ title, organization, location, status }) {
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p><strong>Organization:</strong> {organization}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
}

export default JobCard;
