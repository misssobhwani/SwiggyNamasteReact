import React, { useEffect, useState } from 'react'
import { responseData } from "../utils/mockData02";
import ShimmerContainer from './ShimmerContainer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  // const[resInfo,setResInfo]= useState(null);

  const {resId} = useParams()
  // useEffect(() => { 
  //   // Fetch restaurant data here
  //   fetchRestaurantData();
  // },[]);
  // const fetchRestaurantData = async () => {
  //   const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
  //   const json = await data.json();
  //   console.log(json.data);
  //   setResInfo(json.data)
  // }
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo + "resInfo");
  if(!resInfo) return <ShimmerContainer/>
console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
  const {itemCards} =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);
  // const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const {name,cuisines}=resInfo?.cards[2]?.card?.card?.info
 
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}
      </p>
      <div className='menu-list'>
        <ul>
        {itemCards && itemCards.map((x)=><li key ={x.card.info.name}>{x.card.info.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu