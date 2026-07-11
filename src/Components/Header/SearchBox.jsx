import { useState } from "react";
import { SearchIcon } from "../Icon/Icon";

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="search-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <input
        type="text"
        placeholder="جستجو..."
        className={`search-input ${isOpen ? "open" : ""}`}
      />

      <button className="search-btn" onClick={() => setIsOpen((prev) => !prev)}>
        <SearchIcon />
      </button>
    </div>
  );
}
