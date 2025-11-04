import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <div className="text">
        <h6>{avgRating} Star</h6>
        <h6>{sla.slaString}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
