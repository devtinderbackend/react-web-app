import { IMAGE_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData)
    const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData?.info;
    const {loggedInUser}= useContext(UserContext)

    return (
        <div className="flex flex-wrap" data-testid="restCard">
            <div className="w-60 bg-red-50 p-15 m-10 border-r-8 border border-transparent hover:border-gray-300 hover:shadow-lg hover:cursor-pointer transition-shadow rounded-lg">
                <img className="w-full h-36 object-cover rounded-lg" src={IMAGE_URL + cloudinaryImageId} alt={name} />
                <div className="pt-10">
                    <h3 className="text-lg font-bold text-gray-800 m-0 no-underline">{name}</h3>
                    <h3 className="text-lg font-bold text-gray-800 m-0 no-underline">{loggedInUser}</h3>
                    <p className="text-sm text-gray-500 my-1">{cuisines.join(" , ")}</p>
                    <div className="flex justify-between text-sm mt-2.5">
                        <span className="inline-block font-medium text-gray-600">{costForTwo}</span>
                        <span className="inline-block font-medium bg-orange-600 text-white px-2.5 py-1 rounded-md">{avgRating}</span>
                        <span className="inline-block font-medium text-green-500">{sla.deliveryTime} Minutes</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RestaurantCard;
