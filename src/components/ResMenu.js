import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANT_API } from "../utils/constants";
import useResMenuInfo from "../utils/useResMenuInfo";

const ResMenu = () => {
    const { resId }= useParams();
    const menuInfo = useResMenuInfo(resId);
    console.log(resId);
    
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