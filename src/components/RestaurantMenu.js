import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <p>{sla.deliveryTime} Minutes</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (<li key={item.card.info.id}>{
                    item.card.info.name
                } - {formatPrice(item.card.info.price || item.card.info.defaultPrice)}</li>))}

            </ul>

        </div>
    )
}

export default RestaurantMenu

