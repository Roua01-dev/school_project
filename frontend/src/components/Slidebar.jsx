 import React from 'react'
 import { NavLink, useNavigate } from "react-router-dom";
 import {IoPerson,IoHome,IoLogOut} from "react-icons/io5"
 import { GiOpenBook } from "react-icons/gi";
 import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faBook, faUser } from '@fortawesome/free-solid-svg-icons';

 const Slidebar = () => 
  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
   return (
     <div>
       <aside className="menu pl-2 has-shadow">
  <p className="menu-label">General</p>
  <ul className="menu-list">
  <li>
    <NavLink to={"/dashboard"} className="button is-light">
      <IoHome/> Dashboard
    </NavLink>
  </li>
  <li>
    <NavLink to={"/cours"} className="button is-light">
      <GiOpenBook /> Support de cours
    </NavLink>
  </li>
  <li>
    <NavLink to="/Emploi" className="button is-light">
      <FontAwesomeIcon icon={faCalendarAlt} /> Emploi de temps
    </NavLink>
  </li>
  <li>
    <NavLink to="/NotesEtudiant" className="button is-light">
      <FontAwesomeIcon icon={faBook} /> Notes
    </NavLink>
  </li>
  <li>
    <NavLink to="/Stages" className="button is-light">
      <FontAwesomeIcon icon={faUser} /> Offres de stage
    </NavLink>
  </li>
</ul>

  {user && user.role==="admin"&&(

<div>
<p className="menu-label">Administration</p>
<ul className="menu-list">
  <li>
    <NavLink to={"/users"}>
      <IoPerson /> Users
    </NavLink>
  </li>
</ul>
</div>

  )}
 
 <div>
  <p class="menu-label">Settings</p>
  <ul class="menu-list">
  <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
   </li>
  </ul>

 </div>
</aside>
     </div>
   )
 }
 
 export default Slidebar
 