import { useState } from "react";

function SearchBox() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Search Jobs</h2>

      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Enter job title"
      />

      <p>You are searching for: {search}</p>
    </div>
  );
}

export default SearchBox;
