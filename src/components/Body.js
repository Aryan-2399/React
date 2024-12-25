import { ResCard } from "./ResCard";
import { RESTAURANT } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchIp, setSearchIp] = useState("");

  useEffect(() => {
    fetchData()
  }, []);
  async function fetchData() {
    // fetch data from API
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const res = await data.json();
    console.log(res);
    setListOfRes(res.data.cards[4]['card'].card.gridElements.infoWithStyle.restaurants);
    setFilterRes(res.data.cards[4]['card'].card.gridElements.infoWithStyle.restaurants);
  }
  if(listOfRes.length === 0) {
    return(<Shimmer/>)
  }
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants" value={searchIp} onChange={(e)=> setSearchIp(e.target.value)}/>
        <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchIp);
              if(searchIp != ''){
                const filteredRestaurant = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchIp.toLowerCase())
                );
                setFilterRes(filteredRestaurant);
              } else {
                setFilterRes(listOfRes);
              }
              
            }}
          >
            Search
          </button>
        <button className="top-rated"
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
        {filterRes.map((resInfo) => (
          <Link key={resInfo.info.id} to={"restaurant/" + resInfo.info.id}><ResCard resInfo={resInfo} /></Link>
        ))}
      </div>
    </div>
  );
};
