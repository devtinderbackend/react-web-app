import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList);
    return (
        <div className="body">
            <div className="filter-search">
                <button className="filter-btn" onClick={() => {
                    const filterdList = restaurantList.filter((res) => res.card.card.info.avgRating > 4)
                    setRestaurantList(filterdList)
                }
                }> Top rated restaurant</button>
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) =>

                    <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant} />  // Added  Restaurant component inside body component.

                )}
            </div>

        </div>
    )
}

export default Body;