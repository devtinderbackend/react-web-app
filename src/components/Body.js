import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer"
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("")
    const { loggedInUser, setUserName } = useContext(UserContext)

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
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<h1>Please check your internet connection</h1>)
    }

    return restaurantList.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter-search">
                <input type="text" className="m-2 p-1 border border-solid border-black" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }
                }></input>
                <button className="bg-green-50 m-2 px-4 py-2 rounded-lg"
                    onClick={() => {
                        const filteredRestaurantList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurantList(filteredRestaurantList)
                    }
                    }
                >Search</button>

                <button className="bg-green-50 m-2 px-4 py-2 rounded-lg" onClick={() => {
                    const filteredRestaurantList = restaurantList.filter((res) => res.info.avgRating > 4.4)
                    setFilteredRestaurantList(filteredRestaurantList)
                }
                }> Top Rated Restaurant</button>
                <label>UserName: </label>
                <input type="text" className="m-2 p-1 border border-solid border-black" value={loggedInUser} onChange={(e) => { setUserName(e.target.value) }}></input>
            </div>
            <div className="restaurant-container flex flex-wrap">
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
