import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SearchInput({
  isInputVisible,
  searchQuery,
  onSearch,
  handleSearchClick,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (/^[a-zA-Z0-9\s]*$/.test(value)) {
      onSearch(e);
    }
  };

  const handleKeyDown = (e) => {
    if (/[^a-zA-Z0-9\s]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold">Patients</h1>
      <Button
        className={`${isInputVisible ? "hidden" : ""}`}
        variant="ghost"
        size="icon"
        onClick={handleSearchClick}
      >
        <Search className="h-5 w-5" />
      </Button>
      {isInputVisible && (
        <input
          type="text"
          value={searchQuery || ""}
          ref={inputRef}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search patients..."
          className="ml-4 p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      )}
    </div>
  );
}
