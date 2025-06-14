import Numpad from "../../components/numpad/Numpad";
import ProductsList from "../../components/productsList/ProductsList";
import UserData from "../../components/userData/UserData";

function UserLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-amber-300">

      {/* Header */}
      <div className="flex justify-between items-center h-16 w-full bg-blue-400 px-4">
        <div className="text-lg font-bold text-white">Test</div>
        <UserData/>
      </div>

      {/* Search Bar & Product List */}
      <div className="flex flex-col md:flex-row w-full flex-grow-0 bg-white">
        <ProductsList />
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row flex-grow bg-red-400 w-full p-2 gap-4">

        {/* Receipt Area */}
        <div className="flex flex-col w-full lg:w-3/5 h-full gap-2">
          <div className="bg-amber-300 p-2 rounded">SearchCustomer</div>
          <div className="flex-grow bg-white rounded p-2">Receipt component</div>
        </div>

        {/* Spacer for large screens */}
        <div className="hidden lg:block lg:w-1/12"></div>

        {/* Numpad */}
        <div className="w-full lg:w-2/5 h-full">
          <div className="bg-white rounded h-full p-2">
            <Numpad />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
