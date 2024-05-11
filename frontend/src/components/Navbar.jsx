import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import logo from '../Images/images.png';
import '../css/navbar.css';

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div>
      <h2 className="subtitle">
        <br /> <br />
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
    </div>
  );
};

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="navbar is-fixed-top has-shodow" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <img src={logo} width="100" height="100" alt='logo'/>
        <Welcome />
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink to="/Compte" className="button is-light">
                <FontAwesomeIcon icon={faUser} /> Mon compte
              </NavLink>
              <button onClick={logout} className="button is-light">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
