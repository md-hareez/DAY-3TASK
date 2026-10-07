// import Header from "./compnents/Header";
// import WelcomeMessage from "./compnents/WelcomeMessage";
// import Footer from "./compnents/footer";
// import JobCard from "./compnents/JobCard";
// import SearchBox from "./compnents/SearchBox";
// import JobList from "./compnents/JobList";
// import JobForm from "./compnents/JobForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./compnents/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Job";
import AddJob from "./pages/Addjob";

function App() {
  return (
    <>
    {/* Task1 
    <div>
      <Header />
      <WelcomeMessage />
      <Footer />
    </div>
    */}


    {/* Task 2
    <div> 
      <h1>Job Opportunities</h1>

      <JobCard
        title="Frontend Developer"
        organization="ABC Technologies"
        location="Chennai"
        status="Applied"
      />

      <JobCard
        title="React Developer"
        organization="Google"
        location="Bangalore"
        status="Interview"
      />

      <JobCard
        title="Software Engineer"
        organization="Microsoft"
        location="Hyderabad"
        status="Selected"
      />
    </div>
    */}

    {/* Task 3 
    <div>
      <h1>Job Tracker</h1>

      <SearchBox />
    </div>
    */}
   {/*
    <div>
      <JobList />
    </div>
   */}
  {/*
   <div>
      <JobForm />
    </div>
  */}

  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
