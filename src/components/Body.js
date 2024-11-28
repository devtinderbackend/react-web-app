import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);     //local restaurantList state variable for updating UI based on Data
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]); //local filteredRestaurantList state variable for updating UI based on Data
    const [searchText, setSearchText] = useState("")    // local searchText state variable for binding input text

    useEffect(
        () => {
            fetchData();
        }
        , [])

    // Fetch swiggy Restaurant List API

    const fetchData = async () => {
        const data = await fetch("https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999");
        const json = await data.json();
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )
        setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //Rendering Shimmer UI component when page loads then Call Swiggy API and render page

    return restaurantList.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter-search">
                <input type="text" className="input-box" value={searchText} onChange={(e) => // create search input box and value by default is empty, when user type in search text, setSearchText update with new value
                {
                    setSearchText(e.target.value)
                }
                }></input>
                <button className="serach-btn"
                    onClick={() => {
                        // User click on search button then filteredRestaurantList will be display which includes name

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
                {filteredRestaurantList.map((restaurant, index) => {
                    return (
                        <>
                            <RestaurantCard key={restaurant?.card?.card?.info?.id} resData={restaurant} />
                        </>
                    )
                }
                )}
            </div>

        </div>
    )
}

export default Body;
