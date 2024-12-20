import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu =(restId)=>
{
    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + restId)
        const json = await data.json();
        setRestInfo(json.data)
    }
    return restInfo;
}

export default useRestaurantMenu;