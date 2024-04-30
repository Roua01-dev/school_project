 import React from 'react'
 import {NavLink}from 'react-router-dom'
 import {IoPerson,IoHome,IoLogOut} from "react-icons/io5"
 import { GiOpenBook } from "react-icons/gi";

 const Slidebar = () => {
   return (
     <div>
       <aside className="menu pl-2 has-shadow">
  <p className="menu-label">General</p>
  <ul className="menu-list">
    <li><NavLink to={"/dashboard"}><IoHome/>Dashboard</NavLink></li>
    <li><NavLink to={"/cours"}><GiOpenBook />Support de cours</NavLink></li>
  </ul>
  <p class="menu-label">Administration</p>
  <ul class="menu-list">
  <li><NavLink to={"/users"}><IoPerson/>Users</NavLink></li>
    
   
  </ul>
  <p class="menu-label">Settings</p>
  <ul class="menu-list">
    <button className='button is-white'><IoLogOut/>Logout</button>
  </ul>
</aside>
     </div>
   )
 }
 
 export default Slidebar
 