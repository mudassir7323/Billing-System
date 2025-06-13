import { useRef } from "react";
import SearchBar from "./Searchbar";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional: use Lucide icons

const dummyProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    image:
      "https://images.unsplash.com/photo-1606813909353-8927dc498aa2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "DSLR Camera",
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962e7db128?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "MacBook Pro",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155222f368?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    name: "Smartphone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 7,
    name: "Tablet",
    image:
      "https://images.unsplash.com/photo-1551739454-2216fe8f5a49?auto=format&fit=crop&w=300&q=80",
  },
];

function ProductsList() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* SearchBar */}
      <div className="w-full md:w-[30%]">
        <SearchBar />
      </div>

      {/* Product Slider */}
      <div className="w-full md:w-[60%] relative overflow-hidden bg-white rounded-lg border border-gray-200 shadow">
        {/* Scrollable products */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 px-4 py-4 scroll-smooth"
        >
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[140px] flex-shrink-0 bg-white rounded-lg border border-gray-100 p-2 shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-24 object-cover rounded mb-2"
              />
              <p className="text-center text-sm font-medium">{product.name}</p>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
