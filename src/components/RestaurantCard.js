import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-logo" src={IMAGE_URL + cloudinaryImageId} alt={name} />
            <div className="res-card-info">
                <h3>{name}</h3>
                <p className="cuisines">{cuisines.join(" , ")}</p>
                <div className="card-details">
                    <span className="cost">{costForTwo}</span>
                    <span className="rating">{avgRating}</span>
                    <span className="delivery-time">{sla.deliveryTime} Minutes</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;