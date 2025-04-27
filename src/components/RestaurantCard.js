import { IMG_CDN_URL } from "../utils/constants";
import ShimmerContainer from "./ShimmerContainer";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
      resData?.info;
    // console.log(resData);
    // console.log(resData.info);
    return resData === null ? <ShimmerContainer/> : (
      <div className="res-card">
        <img
          alt="meghnaFood"
          //src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{costForTwo}</h6>
        <h6>{sla.slaString}</h6>
      </div>
    );
  };

export default RestaurantCard;