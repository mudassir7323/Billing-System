import { useState } from "react";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
        // You can add additional logic here like calling an API or filtering a list
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex w-full max-w-md rounded-lg border border-gray-300 bg-white shadow-sm">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="rounded-r-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
