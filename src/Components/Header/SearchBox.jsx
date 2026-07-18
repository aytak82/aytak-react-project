import { useState } from "react";
import { SearchIcon } from "../Icon/Icon";

export default function SearchBox({ mobile = false }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="search-container"
      onMouseEnter={() => !mobile && setIsOpen(true)}
      onMouseLeave={() => !mobile && setIsOpen(false)}
    >
      <input
        type="text"
        placeholder="جستجو..."
        className={`search-input ${isOpen || mobile ? "open" : ""}`}
      />

      <button
        className="search-btn"
        onClick={() => !mobile && setIsOpen((prev) => !prev)}
      >
        <SearchIcon />
      </button>
    </div>
  );
}
