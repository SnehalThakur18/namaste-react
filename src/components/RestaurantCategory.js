import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategaory = ({ data }) => {
  console.log("show>>>>>", data);
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 p-4 shadow-lg mx-auto my-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <FaChevronDown
            className={`transform transition-transform duration-500 ${
              showItems ? "rotate-180" : ""
            }`}
          />
        </div>
        {/* Animated container */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showItems ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ItemsList items={data.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategaory;
