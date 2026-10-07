import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">Job Tracker</h1>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>

          <Link to="/jobs" className="hover:text-blue-200">
            Jobs
          </Link>

          <Link to="/add-job" className="hover:text-blue-200">
            Add Job
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
