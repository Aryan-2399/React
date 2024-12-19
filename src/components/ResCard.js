import { CDN_URL, STYLE_CARD } from "../utils/constants";
// giving styles through objects
export const ResCard = (prop) => {
    const {resInfo}= prop;
    const {name, cloudinaryImageId, cuisines, avgRating, sla } = resInfo.info;
    return (
      <div className="res-card" style={STYLE_CARD}>
        <img
          className="res-logo"
          src={CDN_URL + resInfo.info.cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };