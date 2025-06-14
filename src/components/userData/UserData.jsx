import { useState, useRef, useEffect } from "react";
import CreateCategory from "../../layouts/userLayout/CreateCategory";
import AddProduct from "../../layouts/userLayout/AddProduct";

function UserData() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const [formName, setFormName] = useState("");
  const dropdownRef = useRef(null);

  const handleMenuItemClicked = (name) => {
    setFormName(name);
    setShowFlag(true);
    setIsOpen(false);
  };

  const user = {
    name: "Muhammad",
    id: "1002",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderForm = () => {
    switch (formName) {
      case "CreateCategory":
        return <CreateCategory />;
      case "AddProduct":
        return <AddProduct />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        {/* Profile area */}
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

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
            <ul className="py-1">
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleMenuItemClicked("CreateCategory")}
                >
                  Create Category
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleMenuItemClicked("AddProduct")}
                >
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

      {/* Form modal */}
      {showFlag && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-white/30 flex items-center justify-center z-30">
          <div className="bg-white w-[95%] sm:w-[90%] md:w-[500px] max-h-[80vh] p-6 rounded-xl overflow-y-auto relative shadow-2xl">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 font-bold text-lg"
              onClick={() => setShowFlag(false)}
            >
              ×
            </button>
            {renderForm()}
          </div>
        </div>
      )}


    </>
  );
}

export default UserData;
