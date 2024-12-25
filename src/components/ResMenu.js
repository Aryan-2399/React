import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANT_API } from "../utils/constants";

const ResMenu = () => {
    const [menuInfo, setMenuInfo] = useState(null);
    const { resId }= useParams();
    console.log(resId);
    useEffect(() => {
        fetchMenuData();
    },[])
    fetchMenuData = async () => {
        // fetch menu data from API
        const info = await fetch(RESTAURANT_API+ resId);
        const data = await info.json();
        console.log(data);
        setMenuInfo(data);
    }
    if(menuInfo == null) {
        return <Shimmer/>;
    }
    const {name, cuisines, costForTwoMessage} = menuInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
    return (
    <div>
        <h1>{name}</h1>
        <div>{cuisines.join(", ")} - {costForTwoMessage}</div>
        <h2>Menu</h2>
        {itemCards.map((e) => (<div key={e?.card?.info.id}>
            <li>{e?.card?.info?.name} - Rs.{(e?.card?.info?.price ? e?.card?.info?.price : e?.card?.info?.defaultPrice)/100}</li>
        </div>))}
    </div>
    )
}

export default ResMenu;