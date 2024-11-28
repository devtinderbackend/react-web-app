import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData?.info;   //Destructuring the API data attributes.
    return (
        <div className="res-card">
            <img className="res-logo" src={IMAGE_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;
