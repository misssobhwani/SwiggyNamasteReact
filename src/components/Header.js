import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const[btnName,setBtnName]= useState("Login");
  const onlinestatus = useOnlineStatus();
  //let btnName = "Login";
  console.log("Header rendering");
    return (
      <div className="Header">
        <div className="LogoContainer">
          <img
            className="LogoImg"
            src={
              "https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg"
            }
          ></img>
        </div>
        <div className="Navitems">
          <ul>
            <li>online status : {onlinestatus ? "✅" : "📴"}</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to = '/grocery'>Grocery</Link></li>
            <li><Link to = '/contact'>Contact</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log(btnName);
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;