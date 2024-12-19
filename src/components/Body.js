import { ResCard } from "./ResCard";
import { RESTAURANT } from "../utils/mockData";
import { useState } from "react";


export const Body = () => {
  const [listOfRes, setListOfRes] = useState(RESTAURANT);
  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filteredRestaurants = listOfRes.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setListOfRes(filteredRestaurants);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((resInfo) => (
          <ResCard key={resInfo.info.id} resInfo={resInfo} />
        ))}
      </div>
    </div>
  );
};
