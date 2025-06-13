import { useState, useRef, useEffect } from "react";

function UserData() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = {
    name: "Muhammad",
    id: "1002",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80",
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Transparent background for name + image */}
      <div className="flex items-center space-x-3 bg-transparent p-2 rounded-md">
        <span className="text-white font-medium">{user.name}</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative focus:outline-none"
        >
          <img
            src={user.image}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border border-gray-300"
          />
        </button>
      </div>

      {/* Solid dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
          <ul className="py-1">
            <li>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Add Product
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Remove Product
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Update Product
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserData;
