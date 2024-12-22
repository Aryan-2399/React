import { ResCard } from "./ResCard";
import { RESTAURANT } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);
  async function fetchData() {
    // fetch data from API
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res = await data.json();
    console.log(res);
    setListOfRes(res.data.cards[4]['card'].card.gridElements.infoWithStyle.restaurants)
  }
  if(listOfRes.length === 0) {
    return(<Shimmer/>)
  }
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
