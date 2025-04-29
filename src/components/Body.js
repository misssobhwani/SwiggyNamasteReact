import RestaurantCard , {withpromotedRestrauntCard}from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerContainer from "./ShimmerContainer";
import { responseData } from "../utils/mockData02";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
console.log(responseData);
const [searchText, setSearchText] = useState("");
const [listRes,setListRes]= useState([])   //whenever a state variable changes react rerenders the component
const [filteredList,setFilteredList]= useState([])
//HOC
const RestaurantCardPromoted = withpromotedRestrauntCard(RestaurantCard)
// const data1 = useFetchdataApi()
useEffect(()=>{
fetchApidata();
},[])



const fetchApidata = async() =>{
  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const data01 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const json = await data.json();
   const json03 = await responseData;
   console.log("data"+ json);
   console.log(responseData);
   //console.log(json);
   //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   setListRes(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredList(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}


// console.log(" body rendering");

// if(listRes.length === 0 ){
// return<ShimmerContainer/>
// }
const handleSearchText = (e) => {
  setSearchText(e.target.value);
  console.log(searchText)
}

const handleSearchClick = () => {
  const filteredList = listRes.filter((x) => x.info.name.toLowerCase().includes(searchText.toLowerCase()));
  setListRes(filteredList);
  setFilteredList(filteredList);
  console.log(filteredList);
}
  console.log(filteredList + "FL");
const onlineStatus = useOnlineStatus();

if(onlineStatus === false) return <h1>Looks like you are offline. please check youtr internet connection</h1>

    return  listRes.length === 0 ? <ShimmerContainer/> : (
      <div className="Body">
        <div className= "filter-and-search">
        <div className="search">
        <input type="text"  placeholder="Search for restaurant" className="search-input" value={searchText} onChange={handleSearchText}/>
        <button className="search-btn" onClick={handleSearchClick}>Search</button>
        </div>
        
           <button className="filter-btn"
           onClick={()=>{
            const filteredList = resList.filter((x)=>x.info.avgRating>4)
            setFilteredList(filteredList);
            }} >Top rated Restaurant</button>
        </div>
        
        <div className="res-container">
          {filteredList.map((resDataInfo) => (
           <Link key={resDataInfo.info.id} to={"/restaurants/"+resDataInfo.info.id} > {resDataInfo.info.aggregatedDiscountInfoV3?.header ? <RestaurantCardPromoted key={resDataInfo.info.id} resData={resDataInfo} /> : <RestaurantCard key={resDataInfo.info.id} resData={resDataInfo} /> } </Link>
          ))}
          {/* {filteredList.map((resDataInfo) => {
    console.log(resDataInfo);  // 👈 Logging here
    return (
      <Link key={resDataInfo.info.id} to={"/restaurants/" + resDataInfo.info.id}>
        {resDataInfo.info.aggregatedDiscountInfoV3?.header
          ? <RestaurantCardPromoted key={resDataInfo.info.id} resData={resDataInfo} /> 
          : <RestaurantCard key={resDataInfo.info.id} resData={resDataInfo} />
        }
      </Link>
    );
  })} */}
        </div>
      </div>
    );
  };

  const data = [
       {
         label: "nav1",
         subNav: [
           { label: "nav1.1", subNav: [{ label: "nav1.1.1" }] },
           { label: "nav1.2" },
           {
             label: "nav1.3",
             subNav: [{ label: "nav1.3.1" }]
           }
         ]
       },
       {
         label: "nav2",
         subNav: [
           { label: "nav2.1" },
           { label: "nav2.2" },
           {
             label: "nav2.3",
             subNav: [{ label: "nav2.3.1" }]
           }
         ]
       }
     ];

export default Body;