import { useState } from "react";
import { IMAGE_URL } from "../utils/constants";

const RestaurantSubCategoryItemLists = ({ categories }) => {
    const [activeIndex, setActiveIndex] = useState(null); // Track which category is active

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
    };

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index} className="my-4">
                    {/* Child Category Title */}
                    <div
                        className="font-semibold text-lg text-gray-700 cursor-pointer"
                        onClick={() => handleClick(index)} // Pass the index of the clicked category
                    >
                        {category.title} ({category.itemCards.length})
                    </div>

                    {/* Child Category Items */}
                    {activeIndex === index && (
                        <div className="mt-2">
                            {category.itemCards.map((item) => (
                                <div
                                    key={item.card.info.id}
                                    className="m-2 p-4 border-b border-gray-200 flex justify-between items-center"
                                >
                                    <div className="flex-1 overflow-hidden">
                                        <div className="font-semibold text-gray-800 py-2">
                                            {item.card.info.name} - ₹
                                            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {item.card.info.description}
                                        </p>
                                        {/* {item.card.info.description && (
                                            <p className="text-sm text-gray-600 truncate">
                                                {item.card.info.description.length > 100
                                                    ? item.card.info.description.substring(0, 100) + "..."
                                                    : item.card.info.description}
                                            </p>
                                        )} */}
                                    </div>
                                    <div className="relative">
                                        {console.log("Image URL:", IMAGE_URL + item.card.info.imageId)}
                                        <img
                                            className="w-36 h-36 rounded-lg"
                                            src={IMAGE_URL + item.card.info.imageId}
                                            alt={item.card.info.name}
                                        />
                                        <button
                                            className="absolute bottom-2 right-2 bg-white text-green-500 px-3 py-1 rounded-md shadow hover:bg-gray-300 transition font-bold"
                                        >
                                            Add +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default RestaurantSubCategoryItemLists;
