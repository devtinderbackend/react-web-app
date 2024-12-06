import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const restInfo = useRestaurantMenu(restId);
    if (restInfo === null) {
        return <Shimmer />
    }
    const { name, cuisines, costForTwoMessage, sla } = restInfo.cards[2].card.card.info;
    const menuSection =
        restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
            ?.card || {};
    const categories =
        restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        ) || [];

    // Handle cases where itemCards are nested inside categories

    const itemCards =
        menuSection.itemCards || menuSection.categories?.[0]?.itemCards || [];
    const formatPrice = (price) => {

        // Ensure price is in paise (divide by 100) and format it to INR

        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2, // Always show two decimal places
        }).format(price / 100); // Convert paise to rupees
    };

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 m-0 no-underline">{name}</h1>
            <p className="text-lg text-gray-500 my-1">{cuisines.join(",")} - {costForTwoMessage}</p>
            {categories.map((category) => <RestaurantCategory key={category.card.card.id} data={category?.card?.card} />)}
        </div>
    )
}

export default RestaurantMenu

