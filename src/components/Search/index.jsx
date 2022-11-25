import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";

import "./style.css";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const handleSearch = () => {
    setIsAtTop(!isAtTop);
  };

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox onSearch={handleSearch} onClose={handleSearch} />
    </div>
  );
}
