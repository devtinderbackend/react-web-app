import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom"

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(
        () => {
            fetchData();
        }
        , [])

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        console.log(json)
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return restaurantList.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter-search">
                <input type="text" className="input-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }
                }></input>
                <button className="serach-btn"
                    onClick={() => {
                        const filteredRestaurantList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurantList(filteredRestaurantList)
                    }
                    }
                >Search</button>

                <button className="filter-btn" onClick={() => {
                    const filteredRestaurantList = restaurantList.filter((res) => res.info.avgRating > 4.4)
                    setFilteredRestaurantList(filteredRestaurantList)
                }
                }> Top rated restaurant</button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurantList.map((restaurant) => {
                    return (
                        <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    )
                }
                )}
            </div>

        </div>
    )
}

export default Body;
