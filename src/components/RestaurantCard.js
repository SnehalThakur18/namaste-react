import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  return (
    <div className="m-3 p-3 w-2xs bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://dummyimage.com/660x780/ffffff/0011ff.png&text=Image+Not+Found!!!"; // Path to your fallback image
        }}
      />
      <h3 className="font-bold m-2">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <div className="text">
        <h6>{avgRating} Star</h6>
        <h6>{sla.slaString}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">
          {props?.resData?.aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
