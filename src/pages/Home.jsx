function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Job Tracker
      </h2>

      <p className="text-gray-600 text-lg mb-8">
        Track your job applications easily in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">10</h3>
          <p className="text-gray-600">Total Jobs</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">5</h3>
          <p className="text-gray-600">Applications</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">2</h3>
          <p className="text-gray-600">Interviews</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
