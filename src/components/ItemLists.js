import { IMAGE_URL } from "../utils/constants";

const ItemLists = ({ items }) => {

    // Check items are array or not

    if (!Array.isArray(items)) {
        console.error("The 'items' prop must be an array.");
        return null;
    }

    return (
        <div className="p-4">
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="m-2 p-4 border-b border-gray-200 flex justify-between items-center"
                >
                    {/* Item Details */}
                    <div className="flex-1">
                        <div className="font-semibold text-gray-800 py-2">
                            {item.card.info.name} - ₹
                            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </div>
                        <p className="text-sm text-gray-600">
                            {item.card.info.description}
                        </p>
                    </div>

                    {/* Image with Button */}
                    <div className="relative">
                        <img
                            className="w-36 h-36 object-cover rounded-lg"
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
    );
};

export default ItemLists;
